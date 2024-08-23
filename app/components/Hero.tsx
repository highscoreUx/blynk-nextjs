import React from "react";
import Container from "./Container";
import Link from "next/link";

const Hero = () => {
	return (
		<div className="my-14">
			<Container>
				<div className="flex flex-col items-center justify-center">
					<h1 className="tracking-tight md:text-center md:max-w-[450px] font-extrabold">
						Blynk Your Links in a Flash!
					</h1>
					<p className="text-[1.15rem] leading-relaxed mt-4 md:max-w-[50%] md:text-center">
						Transform your lengthy URLs into sleek, shareable links with Blynk —
						your one-stop tool for quick and effortless link shortening!
					</p>
					<div className="flex flex-col md:flex-row md:gap-6 [&>*]:flex-1 [&>*]:flex [&>*]:items-center [&>*]:justify-center w-full md:w-[50%] lg:w-[35%] mt-4">
						<Link
							href={"/signup"}
							className="bg-blue-700 text-white p-4 rounded-lg mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
						>
							Get Started For Free
						</Link>
						<Link
							href={"/login"}
							className="bg-blue-100 text-blue-950 p-4 rounded-lg mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
						>
							Sign in to your account
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
