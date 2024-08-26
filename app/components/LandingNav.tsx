import React from "react";
import Container from "./Container";
import Link from "next/link";
import logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

const LandingNav = async () => {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="border-b p-4 sticky top-0 bg-white z-50">
			<Container>
				<div className="flex items-center justify-between">
					<div>
						<Link href={"/"}>
							<div className="flex gap-2 items-center">
								<Image src={logo} alt="Blynk"></Image>
								<p className="text-blue-700 font-semibold text-[24px]">Blynk</p>
							</div>
						</Link>
					</div>
					<div>
						{user ? (
							<Link
								href={"/user-home"}
								className="bg-blue-700 text-white py-2 px-4 rounded-lg  mr-4 mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
							>
								My Account
							</Link>
						) : (
							<Link
								href={"/signup"}
								className="bg-blue-700 text-white py-2 px-4 rounded-lg  mr-4 mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
							>
								Sign Up
							</Link>
						)}
						{user ? (
							<button className="bg-blue-100 text-blue-950 py-2 px-4 rounded-lg  text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]">
								Logout
							</button>
						) : (
							<Link
								href={"/login"}
								className="bg-blue-100 text-blue-950 py-2 px-4 rounded-lg mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
							>
								Login
							</Link>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default LandingNav;
