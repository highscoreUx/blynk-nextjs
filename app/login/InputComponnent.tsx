"use client";
import React, { useState } from "react";
import { login } from "./actions";
import toast from "react-hot-toast";

const InputComponnent = () => {
	const [password, setpassword] = useState("");
	const [email, setEmail] = useState("");
	const [isLoading, setisLoading] = useState(false);
	return (
		<div>
			<div className="flex flex-col items-start gap-2">
				<label htmlFor="email">Email</label>
				<input
					id="email"
					name="email"
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.currentTarget.value);
					}}
					required
					className="w-full text-neutral-600"
					placeholder="example@user.com"
				/>
			</div>
			<div className="flex flex-col items-start mt-4 gap-2">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					required
					className="w-full text-neutral-600"
					placeholder="Enter password"
					value={password}
					onChange={(e) => {
						setpassword(e.currentTarget.value);
					}}
				/>
			</div>
			<button
				// formAction={login}
				onClick={async (e) => {
					const formData = new FormData();
					formData.append("email", email);
					formData.append("password", password);
					e.preventDefault();
					setisLoading(true);
					try {
						const res = await login(formData);
						if (!res.success) {
							toast.dismiss();
							toast.error(res.message);
						} else {
							toast(res.message);
						}
					} catch (error) {
						console.log(error);
					} finally {
						setisLoading(false);
					}
				}}
				className="p-3 bg-blue-700 text-white rounded-lg mt-6 w-full"
				disabled={(!password && !email) || isLoading}
			>
				{isLoading ? "Logging in..." : "Log in"}
			</button>
		</div>
	);
};

export default InputComponnent;
