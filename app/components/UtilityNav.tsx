import React from "react";
import Container from "./Container";
import Link from "next/link";
import logo from "@/app/assets/Logo.svg";
import Image from "next/image";

const UtilityNav = () => {
	return (
		<div className="border-b p-4">
			<Container>
				<Link href={"/"}>
					<div className="flex gap-2 items-center">
						<Image src={logo} alt="Blynk"></Image>
						<p className="text-blue-700 font-semibold text-[24px]">Blynk</p>
					</div>
				</Link>
			</Container>
		</div>
	);
};

export default UtilityNav;
