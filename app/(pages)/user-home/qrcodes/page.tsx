import { createClient } from "@/utils/supabase/client";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import LinkComponent from "./LinkComponent";
import Link from "next/link";

import Image from "next/image";
import { IoIosQrScanner, IoMdQrScanner } from "react-icons/io";
import { IoQrCodeSharp } from "react-icons/io5";

interface links {
	id: number;
	created_at: string;
	redirectUrl: string;
	short: string;
	title: string;
	userid: string;
	expire: string;
	favicon: string;
	visitCount: number;
	qrcode: {
		value: string;
		level: string;
		bgColor: string;
	};
}

const getUser = async () => {
	const supabase = createClient();
	try {
		const {
			data: { user },
		} = await supabase.auth.getUser();
		return user?.id;
	} catch (error) {}
};

//@ts-ignore
const user = await getUser();

const getLink = async (user: string) => {
	const supabase = createClient();
	let { data, error } = await supabase
		.from("url")
		.select("*")
		.eq("userid", user)
		.not("qrcode", "is", null);

	if (error) return error;

	return data;
};

//@ts-ignore
const links = await getLink(user!);

const page = () => {
	return (
		<div className="lg:w-[700px] mx-4 md:mx-6 lg:mx-auto ">
			{
				//@ts-ignore
				links.length > 0 && (
					<div>
						<h2>Your QR Codes</h2>
						<p className="text-sm mt-1">Check out QR Codes you've Generated</p>
					</div>
				)
			}

			<div>
				{
					//@ts-ignore
					links.length > 0 ? (
						<LinkComponent link={links as links[]} />
					) : (
						<div>
							<div className="flex flex-col items-center justify-center mt-14 min-h-[30vh] gap-2">
								<div className="relative text-gray-400">
									<IoMdQrScanner size={200} />
									<IoQrCodeSharp
										size={100}
										className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
									/>
								</div>
								<h2 className="text-center">
									You have not generated any QR Code yet
								</h2>
								<p className="text-center">
									Please generate a QR code to manage your codes
								</p>
								<Link
									href={"qrcodes/create"}
									className="p-3 bg-blue-700 text-white rounded-lg mt-4"
								>
									Create New QRCode
								</Link>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default page;
