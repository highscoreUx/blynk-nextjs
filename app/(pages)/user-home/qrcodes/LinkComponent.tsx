"use client";

import moment from "moment";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoIosMore } from "react-icons/io";
import {
	IoCalendar,
	IoCalendarClearOutline,
	IoClose,
	IoCopyOutline,
	IoDownload,
	IoDownloadOutline,
	IoShareSocialOutline,
} from "react-icons/io5";
import { MdBarChart, MdOutlineEdit } from "react-icons/md";
import QRCode from "react-qr-code";
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton,
	ViberIcon,
	ViberShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from "react-share";

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

const LinkComponent = ({ link }: { link: links[] }) => {
	const [links, setLinks] = useState<links[]>(link);
	const [currentLink, setCurrentLink] = useState("");
	const dialogRef = useRef<HTMLDialogElement>(null);

	const reorder = [...links].reverse();

	return (
		<div className="flex flex-col gap-6 mt-6">
			{reorder.map(
				({
					id,
					short,
					title,
					redirectUrl,
					created_at,
					qrcode,
					expire,
					visitCount,
				}) => {
					const linkto = `${window.location.origin}/${short}`;
					return (
						<div
							key={id}
							className="bg-white p-6 rounded-lg flex flex-col md:flex-row items-start justify-between md:gap-2 gap-4"
						>
							<div className="flex gap-4 flex-col md:flex-row items-top">
								<div className="h-full">
									<QRCode
										id={`qrForDownload-${id}`}
										value={qrcode.value}
										level={qrcode.level}
										bgColor={qrcode.bgColor}
										className="w-[110px] h-full"
									></QRCode>
								</div>
								<div className="flex flex-col gap-4">
									<div className="flex flex-col gap-1">
										<div className="font-bold text-[1.125rem]">
											{title ? title : "Blynk Link"}
										</div>

										<Link
											href={redirectUrl}
											target="_blank"
											className="text-sm"
										>
											{redirectUrl}
										</Link>
									</div>
									<div className="flex items-center gap-2">
										<div className="flex items-center gap-1 text-sm text-gray-500">
											<MdBarChart title="engagement" />
											{visitCount}
										</div>
										<div className="flex items-center gap-1 text-sm text-gray-500">
											<IoCalendar title="Date Created" />{" "}
											{moment(created_at).format("MMM Do YYYY")}
										</div>
										<div className="flex items-center gap-1 text-sm text-gray-500">
											<IoCalendarClearOutline title="expire at" />{" "}
											{moment(expire).format("MMM Do YYYY")}
										</div>
									</div>
								</div>
							</div>
							<div className="flex gap-2">
								<button
									type="button"
									title="download"
									className="p-2 border rounded-lg"
									onClick={(e) => {
										e.preventDefault();
										const svg = document.getElementById(`qrForDownload-${id}`);
										const svgData = new XMLSerializer().serializeToString(svg!);
										const canvas = document.createElement("canvas");
										const ctx = canvas.getContext("2d");
										const img = new Image();
										img.onload = () => {
											canvas.width = img.width;
											canvas.height = img.height;
											ctx?.drawImage(img, 0, 0);
											const pngFile = canvas.toDataURL("image/png");
											const downloadLink = document.createElement("a");
											downloadLink.download = "QRCode";
											downloadLink.href = `${pngFile}`;
											downloadLink.click();
										};
										img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
									}}
								>
									<span className="text-sm leading-none flex gap-2 items-center ">
										<IoDownloadOutline size={16} />
									</span>
								</button>
								<button
									type="button"
									title="copy"
									className="p-2 border rounded-lg"
									onClick={() => {
										dialogRef.current?.showModal();
										setCurrentLink(`${window.location.origin}/${short}`);
									}}
								>
									<span className="text-sm leading-none flex gap-2 items-center ">
										<IoShareSocialOutline />
									</span>
								</button>
								<button
									type="button"
									title="edit"
									className="p-2 border rounded-lg"
								>
									<span className="text-sm leading-none flex gap-2 items-center ">
										<MdOutlineEdit />
									</span>
								</button>
								<button
									type="button"
									title="more"
									className="p-2 border rounded-lg"
								>
									<span className="text-sm leading-none flex gap-2 items-center ">
										<IoIosMore />
									</span>
								</button>
							</div>
						</div>
					);
				}
			)}
			<dialog
				ref={dialogRef}
				className="p-4 md:p-6 rounded-md relative md:w-[500px]"
			>
				<div>
					<h3>Share your Blynk Link</h3>
				</div>
				<div
					className="absolute right-6 top-6 cursor-pointer"
					onClick={() => {
						dialogRef.current?.close();
					}}
				>
					<IoClose />
				</div>
				<div className="flex gap-4 mt-4">
					<div className="flex flex-col items-center gap-1">
						<FacebookShareButton url={currentLink}>
							<div className="p-3 border rounded-md">
								<FacebookIcon round size={32} />
							</div>
						</FacebookShareButton>
						<p className="text-[11px]">Facebook</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<WhatsappShareButton url={currentLink}>
							<div className="p-3 border rounded-md">
								<WhatsappIcon round size={32} />
							</div>
						</WhatsappShareButton>
						<p className="text-[11px]">Whatsapp</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<TwitterShareButton url={currentLink}>
							<div className="p-3 border rounded-md">
								<TwitterIcon round size={32} />
							</div>
						</TwitterShareButton>
						<p className="text-[11px]">Twitter</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<LinkedinShareButton url={currentLink}>
							<div className="p-3 border rounded-md">
								<LinkedinIcon round size={32} />
							</div>
						</LinkedinShareButton>
						<p className="text-[11px]">LinkedIn</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<EmailShareButton url={currentLink}>
							<div className="p-3 border rounded-md">
								<EmailIcon round size={32} />
							</div>
						</EmailShareButton>
						<p className="text-[11px]">Mail</p>
					</div>
					<div className="flex flex-col items-center gap-1">
						<ViberShareButton url={currentLink}>
							<div className="p-3 border rounded-md">
								<ViberIcon round size={32} />
							</div>
						</ViberShareButton>
						<p className="text-[11px]">Mail</p>
					</div>
				</div>
				<div className="flex items-center gap-2 mt-2">
					<p className="flex-1 text-sm border p-2 rounded-md">{currentLink}</p>
					<button
						type="button"
						title="copy"
						className="p-3 bg-gray-200 rounded-lg"
						onClick={() => {
							navigator.clipboard.writeText(`${currentLink}`);
							toast.dismiss();
							toast.success("Copied!");
						}}
					>
						<span className="text-sm leading-none flex gap-2 items-center ">
							Copy
						</span>
					</button>
				</div>
			</dialog>
		</div>
	);
};

export default LinkComponent;
