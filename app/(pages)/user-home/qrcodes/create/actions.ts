"use server";

import { createClient } from "@/utils/supabase/server";
import generateID from "@/app/services/generadeID";
import moment from "moment";
import { getFavicionUrl, getPageTitle } from "@/utils/supabase/getFavicon";
import { revalidatePath } from "next/cache";

export const createLink = async (formData: FormData) => {
	const supabase = createClient();

	const id = generateID();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const url = formData.get("redirectUrl") as string;

	const faviconUrl = await getFavicionUrl(url);
	const fetchedtitle = await getPageTitle(url);

	const datum = {
		title: formData.get("title") ? formData.get("title") : fetchedtitle,
		redirectUrl: formData.get("redirectUrl"),
		short: id,
		userid: user?.id,
		expire: moment().add(7, "days"),
		favicon: faviconUrl,
	};

	const { data, error } = await supabase.from("url").insert([datum]).select();

	if (error) {
		return { success: false, message: error?.message };
	}

	revalidatePath("/user-home/link");
	return { success: true, data, message: "Link Shortened successfully" };
};
