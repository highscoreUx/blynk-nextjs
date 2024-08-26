import React from "react";
import Container from "./Container";
import Link from "next/link";
import { IoLogoFacebook, IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import logo from "@/app/assets/white.svg";
import Image from "next/image";

const Footer = () => {
	const date = new Date();
	return (
		<div className="py-10 bg-gray-700">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-start">
					<div className="flex items-center gap-1">
						<Image src={logo} alt="Logo" />
						<p className="font-bold text-gray-300">Blynk</p>
					</div>
					<div className="flex flex-col gap-1">
						<div className="mb-1">
							<p className="text-gray-300 font-bold">Company</p>
						</div>
						<Link
							href={"/privacy-policy"}
							className="text-gray-400 hover:text-gray-200"
						>
							Privacy Policy
						</Link>
						<Link href={""} className="text-gray-400 hover:text-gray-200">
							Cookie Policy
						</Link>
						<Link
							href={"/temrs-of-service"}
							className="text-gray-400 hover:text-gray-200"
						>
							Terms-of-service
						</Link>
					</div>
					<div className="flex flex-col gap-1">
						<div className="mb-1">
							<p className="text-gray-300 font-bold">Pages</p>
						</div>
						<Link href={"/login"} className="text-gray-400 hover:text-gray-200">
							Log into your account
						</Link>
						<Link
							href={"/signup"}
							className="text-gray-400 hover:text-gray-200"
						>
							Create an account
						</Link>
						<Link
							href={"/auth/sso"}
							className="text-gray-400 hover:text-gray-200"
						>
							Single Sign On
						</Link>
					</div>
					<div className="flex flex-col gap-1">
						<div className="mb-1">
							<p className="text-gray-300 font-bold">Socials</p>
						</div>
						<Link
							href={""}
							className="text-gray-400 hover:text-gray-200 flex items-center gap-2"
						>
							<IoLogoFacebook /> Like us on Facebook
						</Link>
						<Link
							href={""}
							className="text-gray-400 hover:text-gray-200 flex items-center gap-2"
						>
							<IoLogoTwitter /> Follow us on twitter
						</Link>
						<Link
							href={""}
							className="text-gray-400 hover:text-gray-200 flex items-center gap-2"
						>
							<IoLogoGithub /> Check us on Github
						</Link>
					</div>
				</div>
			</Container>
			<Container className="mt-4">
				<hr className="my-5 border-gray-600" />
				<p className="text-sm text-gray-400">
					copyright &copy; {date.getFullYear()} Blynks
				</p>
			</Container>
		</div>
	);
};

export default Footer;
