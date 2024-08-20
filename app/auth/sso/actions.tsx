"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInWithEmail(formData: FormData) {
	const supabase = createClient();

	const { data, error } = await supabase.auth.signInWithOtp({
		email: formData.get("email") as string,
		options: {
			shouldCreateUser: false,
			// emailRedirectTo: "https://example.com/welcome",
		},
	});

	if (error) {
		redirect("/error");
		// toast.dismiss();
		// toast(error.message);
	}

	revalidatePath("/", "layout");
	redirect("/");
}
