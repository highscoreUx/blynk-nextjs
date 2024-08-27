"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { links } from "../constants/links";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoLink, IoMenu, IoQrCodeOutline } from "react-icons/io5";
import logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import LogoutBtn from "./LogoutBtn";

const TopNav = () => {
	const route = usePathname();
	const [isVisible, setIsVisible] = useState(false);
	const [isNavVisible, setIsNavVisible] = useState(false);
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
		<div className="bg-white p-3 border-b sticky top-0 z-50">
			<Container>
				<div className="flex text-sm justify-between items-center relative">
					<div>
						<Link href={"/user-home"}>
							<div className="flex gap-2 items-center">
								<Image src={logo} alt="Blynk"></Image>
								<p className="text-blue-700 font-semibold text-[24px]">Blynk</p>
							</div>
						</Link>
					</div>
					<div className="md:flex gap-4 hidden">
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
					{isNavVisible && (
						<div className="md:hidden gap-4 absolute flex flex-col bg-white inset-x-0 top-12 p-4 shadow-lg rounded-md">
							{links.map(({ path, label }, index) => {
								const isActive = route === path;
								return (
									<Link
										key={index}
										href={path}
										className={`${isActive && "bg-blue-100 text-blue-950"} py-1 px-2 rounded-md text-neutral-600`}
										onClick={() => {
											setIsNavVisible(false);
										}}
									>
										{label}
									</Link>
								);
							})}
							<button
								className="p-2 bg-blue-700 text-white rounded-lg shadow-xl shadow-blue-500/40 hover:shadow-md hover:shadow-blue-500/40 "
								onClick={() => {
									setIsVisible(!isVisible);
								}}
							>
								Create New
							</button>
							<LogoutBtn />
							{isVisible && (
								<div className="w-[200px] flex flex-col gap-2 border shadow-md p-2 rounded absolute bg-white right-0 mt-2">
									<Link
										href={"/user-home/links/create"}
										className="flex items-center text-sm justify-between p-2 rounded hover:bg-blue-100/40"
										onClick={() => {
											isVisible && setIsVisible(false);
											setIsNavVisible(false);
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
											setIsNavVisible(false);
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
					)}
					<div
						className="md:hidden cursor-pointer"
						onClick={() => {
							setIsNavVisible(!isNavVisible);
						}}
					>
						<IoMenu size={24} />
					</div>
					<div className="relative hidden md:block">
						<button
							className="p-2 bg-blue-700 text-white rounded-lg shadow-xl shadow-blue-500/40 hover:shadow-md hover:shadow-blue-500/40 mr-4"
							onClick={() => {
								setIsVisible(!isVisible);
							}}
						>
							Create New
						</button>
						<LogoutBtn />
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
