import React from "react";
import Container from "./Container";
import Link from "next/link";
import logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import LogoutBtn from "./LogoutBtn";

const LandingNav = async () => {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const navs = [{ label: "Features", link: "#features" }];

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
					<div className="md:flex gap-4 items-center hidden">
						{navs.map(({ label, link }, index) => {
							return (
								<Link
									key={index}
									href={link}
									className="text-sm text-gray-500 hover:text-blue-700"
								>
									{label}
								</Link>
							);
						})}
					</div>
					<div className="hidden md:block">
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
							<LogoutBtn />
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
