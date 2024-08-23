"use client";

import React, { useState } from "react";
import { createLink } from "./actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const InputComponent = () => {
	const [title, setTitle] = useState("");
	const [redirectUrl, setRedirectUrl] = useState("");
	const [isValidUrl, setIsValidUrl] = useState(false);
	const [isLoading, setisLoading] = useState(false);
	const router = useRouter();

	const validateUrl = (url: string) => {
		const pattern = new RegExp("https?://[\\w\\-._~:/?#[\\]@!$&'()*+,;=]+");
		return pattern.test(url);
	};
	return (
		<form>
			<div>
				<div className="flex flex-col gap-2">
					<label htmlFor="redirectUrl">Destination</label>
					<input
						type="url"
						name="redirectUrl"
						autoComplete="off"
						value={redirectUrl}
						onChange={(e) => {
							setRedirectUrl(e.currentTarget.value);
							setIsValidUrl(validateUrl(e.currentTarget.value));
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
						autoComplete="off"
						value={title}
						onChange={(e) => {
							setTitle(e.currentTarget.value);
						}}
					/>
				</div>
				<hr className="my-8" />
				<div className="flex justify-between items-center">
					<div></div>
					<div className="flex gap-2 [&>*]:p-2  [&>*]:rounded-lg">
						<button className="text-sm bg-blue-100 text-blue-950" type="button">
							Cancel
						</button>
						<button
							className="text-sm bg-blue-700 text-white"
							onClick={async (e) => {
								e.preventDefault();
								const formData = new FormData();
								formData.append("title", title);
								formData.append("redirectUrl", redirectUrl);
								setisLoading(true);
								try {
									const { message, success } = await createLink(formData);
									if (!success) {
										toast.dismiss();
										toast.error(message);
									} else {
										toast.dismiss();
										toast(message);
										setTitle("");
										setRedirectUrl("");
										router.push("/user-home/links");
									}
								} catch (error) {
								} finally {
									setisLoading(false);
								}
							}}
							disabled={!isValidUrl || isLoading}
							type="submit"
						>
							{isLoading ? "working..." : "create"}
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default InputComponent;
