"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
	const supabase = createClient();

	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		// redirect("/error");
		return { success: false, message: error?.message };
	}

	revalidatePath("/", "layout");
	redirect("/user-home");
	// return { success: true, message: "Login successful" };
}

export async function googleSignin() {
	const supabase = createClient();

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
	});

	if (error) {
		console.log(error);
	}

	if (data.url) {
		redirect(data.url);
	}
}
