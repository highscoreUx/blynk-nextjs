import Link from "next/link";
import React from "react";
import { IoLink, IoQrCode } from "react-icons/io5";

const page = () => {
	return (
		<div className="md:w-[700px] md:mx-6 lg:mx-auto ">
			<div>
				<h2>Welcome</h2>
				<p className="text-sm mt-1">What would you like to today?</p>
			</div>
			<div className="flex flex-col mt-4 md:flex-row [&>*]:p-4 md:[&>*]:p-16 gap-4 md:gap-6 [&>*]:bg-white [&>*]:rounded-lg md:[&>*]:flex md:[&>*]:flex-col md:[&>*]:flex-1 md:[&>*]:justify-center [&>*>p]:text-sm md:mt-6 [&>*]:shadow-lg [&>*]:shadow-blue-700/5 [&>*>h3]:md:mt-2">
				<Link href={"/user-home/links/create"}>
					<IoLink size={56} className="hidden md:block text-blue-700" />
					<h3>Create a Short Link</h3>
					<p>Shorten your long url with sharable links from Blynk</p>
				</Link>
				<Link href={"/user-home/qrcodes/create"}>
					<IoQrCode size={56} className="hidden md:block text-blue-700" />
					<h3>Generate a QR code</h3>
					<p>Quick scans are very possible with Blynk</p>
				</Link>
			</div>
		</div>
	);
};

export default page;
