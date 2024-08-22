"use client";

import React, { useState } from "react";
import { createLink } from "./actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import QRCode from "react-qr-code";

interface QRCodeProps {
	bgColor:
		| "#FFFFFF"
		| "#DE3121"
		| "#EF8000"
		| "#198639"
		| "#229CE0"
		| "#2A5BD7"
		| "#6B52D1"
		| "#D84280"
		| "#000000"
		| "transparent";
	fgColor:
		| "#FFFFFF"
		| "#DE3121"
		| "#EF8000"
		| "#198639"
		| "#229CE0"
		| "#2A5BD7"
		| "#6B52D1"
		| "#D84280"
		| "#000000"
		| "transparent";
	level: "L" | "M" | "Q" | "H";
	size: number;
	value: string;
}

const InputComponent = () => {
	const [title, setTitle] = useState("");
	const [redirectUrl, setRedirectUrl] = useState("");
	const [isLoading, setisLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [qrprops, setQrProps] = useState<QRCodeProps>({
		bgColor: "transparent",
		fgColor: "#000000",
		level: "L",
		size: 256,
		value: "",
	});
	const router = useRouter();

	const linkCOnfig = () => {
		return (
			<div>
				<div className="flex flex-col gap-2">
					<label htmlFor="redirectUrl">Destination</label>
					<input
						type="url"
						name="redirectUrl"
						value={redirectUrl}
						onChange={(e) => {
							setRedirectUrl(e.currentTarget.value);
						}}
						id="redirectUrl"
						placeholder="https://example.com/my-long-url"
						required
					/>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="redirectUrl">
						Title <span className="text-sm text-gray-500">(optional)</span>
					</label>
					<input
						type="text"
						name="title"
						id="title"
						title="title"
						value={title}
						onChange={(e) => {
							setTitle(e.currentTarget.value);
						}}
					/>
				</div>
			</div>
		);
	};

	const bottom = () => {
		return (
			<div>
				<hr className="my-8" />
				<div className="flex">
					<div className="flex w-full justify-between [&>*]:p-2  [&>*]:rounded-lg">
						{currentPage === 1 ? (
							<button
								className="text-sm bg-blue-100 text-blue-950"
								type="button"
							>
								Cancel
							</button>
						) : (
							<button
								className="text-sm bg-blue-100 text-blue-950"
								type="button"
								onClick={() => {
									setCurrentPage(1);
								}}
							>
								Back
							</button>
						)}
						{currentPage === 1 ? (
							<button
								className="text-sm bg-blue-700 text-white"
								disabled={!redirectUrl}
								type="submit"
								onClick={(e) => {
									e.preventDefault();
									setCurrentPage(2);
								}}
							>
								Continue
							</button>
						) : (
							<button
								className="text-sm bg-blue-700 text-white"
								disabled={!redirectUrl}
								type="submit"
							>
								Submit
							</button>
						)}
					</div>
				</div>
			</div>
		);
	};

	const qRConfig = () => {
		return (
			<div className="flex items-start">
				<div className="flex-1">
					<div>
						<h3>Patterns</h3>
						<p className="text-sm mb-3">Choose a pattern</p>
						<div className="flex gap-4 mt-2">
							<QRCode
								size={56}
								value=""
								level="L"
								className={`p-2 border rounded-md ${qrprops.level === "L" && "border-blue-700"}`}
								onClick={() => {
									setQrProps({ ...qrprops, level: "L" });
								}}
							/>
							<QRCode
								size={56}
								value=""
								level="M"
								className={`p-2 border rounded-md ${qrprops.level === "M" && "border-blue-700"}`}
								onClick={() => {
									setQrProps({ ...qrprops, level: "M" });
								}}
							/>
							<QRCode
								size={56}
								value=""
								level="Q"
								className={`p-2 border rounded-md ${qrprops.level === "Q" && "border-blue-700"}`}
								onClick={() => {
									setQrProps({ ...qrprops, level: "Q" });
								}}
							/>
							<QRCode
								size={56}
								value=""
								level="H"
								className={`p-2 border rounded-md ${qrprops.level === "H" && "border-blue-700"}`}
								onClick={() => {
									setQrProps({ ...qrprops, level: "H" });
								}}
							/>
						</div>
					</div>
					<div className="mt-4">
						<h3>Corners</h3>
						<p className="text-sm mb-3">Choose a corner style</p>
						<div className="flex gap-4 mt-2 [&>div>div]:border [&>div>div]:rounded-md">
							<div>
								<div className="bg-white p-2">
									<div className="h-4 w-4 bg-white-800 p-2  border-black border-4"></div>
								</div>
							</div>

							<div>
								<div className="bg-white p-2">
									<div className="h-4 w-4 bg-white-800 p-2  border-black border-4 rounded-sm"></div>
								</div>
							</div>

							<div>
								<div className="bg-white p-2">
									<div className="h-4 w-4 bg-white-800 p-2  border-black border-4 rounded-md"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-4">
						<h3>Background Colours</h3>
						<p className="text-sm mb-3">Choose a Background Colour</p>
						<div className="flex gap-4 mt-2  [&>div>div]:rounded-full flex-wrap">
							<div
								className={`${qrprops.bgColor === "transparent" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "transparent" });
								}}
							>
								<div
									className={`bg-transparent h-10 w-10 rounded-full border`}
								></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#FFFFFF" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#FFFFFF" });
								}}
							>
								<div className={`bg-[#FFFFFF] h-10 w-10 rounded-full`}></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#DE3121" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#DE3121" });
								}}
							>
								<div className={`bg-[#DE3121] h-10 w-10 rounded-full`}></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#EF8000" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#EF8000" });
								}}
							>
								<div className={`bg-[#EF8000] h-10 w-10 rounded-full`}></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#198639" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#198639" });
								}}
							>
								<div className={`bg-[#198639] h-10 w-10 rounded-full`}></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#229CE0" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#229CE0" });
								}}
							>
								<div className={`bg-[#229CE0] h-10 w-10 rounded-full`}></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#2A5BD7" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#2A5BD7" });
								}}
							>
								<div className={`bg-[#2A5BD7] h-10 w-10 rounded-full`}></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#6B52D1" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#6B52D1" });
								}}
							>
								<div className={`bg-[#6B52D1] h-10 w-10 rounded-full`}></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#D84280" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#D84280" });
								}}
							>
								<div className={`bg-[#D84280] h-10 w-10 rounded-full`}></div>
							</div>
							<div
								className={`${qrprops.bgColor === "#000000" && "border-2 border-blue-500"} rounded-full`}
								onClick={() => {
									setQrProps({ ...qrprops, bgColor: "#000000" });
								}}
							>
								<div className={`bg-[#000000] h-10 w-10 rounded-full`}></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					{/* qr */}
					<div className="sticky top-0">
						<QRCode
							value={qrprops.value}
							size={qrprops.size}
							level={qrprops.level}
							bgColor={qrprops.bgColor}
						></QRCode>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			{currentPage === 1 ? linkCOnfig() : qRConfig()}
			{bottom()}
		</div>
	);
};

export default InputComponent;
