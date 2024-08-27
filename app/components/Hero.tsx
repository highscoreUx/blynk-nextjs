import React from "react";
import Container from "./Container";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

const Hero = async () => {
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return (
		<div className="h-[80vh] flex flex-col items-center justify-center relative">
			<div className="h-[80vh] z-10 bg-blue-700 absolute inset-0 mix-blend-multiply"></div>
			<div className="h-[80vh] bg-cover-image bg-cover absolute inset-0 "></div>
			<Container className="my-14 z-20">
				<div className="flex flex-col items-center justify-center">
					<h1 className="tracking-tight md:text-center md:max-w-[450px] font-extrabold text-white">
						Blynk Your Links in a Flash!
					</h1>
					<p className="text-[1.15rem] leading-relaxed mt-4 md:max-w-[50%] md:text-center text-blue-100">
						Transform your lengthy URLs into sleek, shareable links with Blynk —
						your one-stop tool for quick and effortless link shortening!
					</p>
					<div className="flex flex-col md:flex-row md:gap-6 [&>*]:flex-1 [&>*]:flex [&>*]:items-center [&>*]:justify-center w-full md:w-[400px] lg:w-[37%] mt-4">
						{user ? (
							<Link
								href={"/user-home"}
								className="bg-white text-blue-700 p-4 rounded-lg mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
							>
								Go to your account
							</Link>
						) : (
							<Link
								href={"/signup"}
								className="bg-white text-blue-700 p-4 rounded-lg mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
							>
								Get Started For Free
							</Link>
						)}
						{!user && (
							<Link
								href={"/login"}
								className="bg-blue-100 text-blue-950 p-4 rounded-lg mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
							>
								Sign in to your account
							</Link>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
