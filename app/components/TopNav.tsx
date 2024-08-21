"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { links } from "../constants/links";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoLink, IoQrCodeOutline } from "react-icons/io5";

const TopNav = () => {
	const route = usePathname();
	const [isVisible, setIsVisible] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleKeyPress = (e: React.KeyboardEvent) => {
			if (isVisible) {
				if (e.key.toLowerCase() === "l") {
					router.push("/user-home/links/create");
					setIsVisible(false);
				} else if (e.key.toLowerCase() === "q") {
					router.push("/user-home/qrcodes/create");
					setIsVisible(false);
				}
			}
		};

		//@ts-ignore
		document.addEventListener("keydown", handleKeyPress);

		return () => {
			//@ts-ignore
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [isVisible, router]);
	return (
		<div className="bg-white p-3 border-b sticky top-0">
			<Container>
				<div className="flex text-sm justify-between items-center">
					<div>Logo</div>
					<div className="flex gap-4">
						{links.map(({ path, label }, index) => {
							const isActive = route === path;
							return (
								<Link
									key={index}
									href={path}
									className={`${isActive && "bg-blue-100 text-blue-950"} py-1 px-2 rounded-md text-neutral-600`}
								>
									{label}
								</Link>
							);
						})}
					</div>
					<div className="relative">
						<button
							className="p-2 bg-blue-700 text-white rounded-lg shadow-xl shadow-blue-500/40 hover:shadow-md hover:shadow-blue-500/40 "
							onClick={() => {
								setIsVisible(!isVisible);
							}}
						>
							Create New
						</button>
						{isVisible && (
							<div className="w-[200px] flex flex-col gap-2 border shadow-md p-2 rounded absolute bg-white right-0 mt-2">
								<Link
									href={"/user-home/links/create"}
									className="flex items-center text-sm justify-between p-2 rounded hover:bg-blue-100/40"
									onClick={() => {
										isVisible && setIsVisible(false);
									}}
								>
									<span className="flex gap-1">
										<IoLink size={20} /> Link
									</span>
									<p className="py-[0.5] w-5 border rounded flex items-center justify-center">
										L
									</p>
								</Link>
								<Link
									href={"/user-home/qrcodes/create"}
									className="flex items-center text-sm justify-between p-2 rounded hover:bg-blue-100/40"
									onClick={() => {
										isVisible && setIsVisible(false);
									}}
								>
									<span className="flex gap-1">
										<IoQrCodeOutline size={20} /> Qr code
									</span>
									<p className="py-[0.5] w-5 border rounded flex items-center justify-center">
										Q
									</p>
								</Link>
							</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default TopNav;
