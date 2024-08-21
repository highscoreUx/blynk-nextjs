"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export async function signup(formData: FormData) {
	const supabase = createClient();

	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signUp(data);

	if (error) {
		// redirect("/error");
		return { success: false, message: error?.message };
	}

	revalidatePath("/", "layout");
	redirect("/user-home");
}

export async function googleSignUp() {
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
