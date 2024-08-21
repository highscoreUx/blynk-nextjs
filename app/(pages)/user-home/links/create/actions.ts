"use server";

import { createClient } from "@/utils/supabase/server";
import generateID from "@/app/services/generadeID";
import moment from "moment";
import { revalidatePath } from "next/cache";

export const createLink = async (formData: FormData) => {
	const supabase = createClient();

	const id = generateID();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const datum = {
		title: formData.get("title"),
		redirectUrl: formData.get("redirectUrl"),
		short: id,
		userid: user?.id,
		expire: moment().add(7, "days"),
	};

	const { data, error } = await supabase.from("url").insert([datum]).select();

	if (error) {
		return { success: false, message: error?.message };
	}

	return { success: true, data, message: "Link Shortened successfully" };
};
