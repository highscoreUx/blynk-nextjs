"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import {
	IoCalendar,
	IoCalendarClearOutline,
	IoCopyOutline,
	IoShareOutline,
} from "react-icons/io5";
import { MdBarChart } from "react-icons/md";

interface links {
	id: number;
	created_at: string;
	redirectUrl: string;
	short: string;
	title: string;
	userid: string;
	expire: Date;
	favicon: string;
}

const LinkComponent = ({ link }: { link: links[] }) => {
	const [links, setLinks] = useState<links[]>(link);
	return (
		<div className="flex flex-col gap-6 mt-6">
			{links.map(({ id, short, title, redirectUrl, created_at, favicon }) => {
				return (
					<div
						key={id}
						className="bg-white p-6 rounded-lg flex items-start justify-between gap-6"
					>
						<div className="flex gap-4 items-top">
							<div>
								<input
									type="checkbox"
									name="check"
									id="check"
									title="selected"
								/>
							</div>
							<div>
								{favicon && (
									<div className="p-2 border rounded-full">
										<img
											src={favicon}
											alt={redirectUrl}
											height={16}
											width={16}
											className="object-cover"
										/>
									</div>
								)}
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-1">
									<div className="font-bold text-[1.125rem]">
										{title ? title : "Blynk Link"}
									</div>
									<Link
										href={`${window.location.origin}/${short}`}
										target="_blank"
										className="text-sm font-medium text-blue-600"
									>{`${window.location.host}/${short}`}</Link>
									<Link href={redirectUrl} target="_blank" className="text-sm">
										{redirectUrl}
									</Link>
								</div>
								<div className="flex items-center gap-2">
									<div className="flex items-center gap-1 text-sm">
										<MdBarChart /> 157 Engagement
									</div>
									<div className="flex items-center gap-1 text-sm">
										<IoCalendar /> {"created"}
									</div>
									<div className="flex items-center gap-1 text-sm">
										<IoCalendarClearOutline /> 157 Engagement
									</div>
								</div>
							</div>
						</div>
						<div className="flex gap-2">
							<button
								type="button"
								title="copy"
								className="p-2 bg-gray-200 rounded-lg"
								onClick={() => {
									navigator.clipboard.writeText(
										`${window.location.origin}/${short}`
									);
									toast.dismiss();
									toast.success("Copied!");
								}}
							>
								<span className="text-sm flex gap-2 items-center ">
									<IoCopyOutline /> Copy
								</span>
							</button>
							<button
								type="button"
								title="copy"
								className="p-2 border rounded-lg"
							>
								<span className="text-sm flex gap-2 items-center ">
									<IoShareOutline /> Share
								</span>
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default LinkComponent;
