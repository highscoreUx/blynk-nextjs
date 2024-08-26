"use client";

import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

const LogoutBtn = () => {
	return (
		<button
			className="bg-blue-100 text-blue-950 py-2 px-4 rounded-lg  text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
			onClick={async () => {
				const supabase = createClient();
				await supabase.auth.signOut();
				toast.success("Logout Successful");
				revalidatePath("/", "layout");
			}}
		>
			Logout
		</button>
	);
};

export default LogoutBtn;
