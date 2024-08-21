"use client";

import { useState } from "react";
import { signup } from "../signup/actions";
import toast from "react-hot-toast";

const Validator = () => {
	const [password, setpassword] = useState("");
	const [email, setEmail] = useState("");
	const [isLoading, setisLoading] = useState(false);
	const [validation, setValidation] = useState({
		hasCapital: false,
		hasNumber: false,
		hasSmallLetter: false,
		lessthan8: false,
		specialCharacter: false,
	});

	const allValidationsPassed = Object.values(validation).every(Boolean);

	return (
		<div className="w-full">
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
			<div className="mt-4">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					value={password}
					onChange={(e) => {
						setpassword(e.currentTarget.value);
						setValidation({
							hasCapital: /[A-Z]/.test(e.currentTarget.value),
							hasNumber: /[0-9]/.test(e.currentTarget.value),
							hasSmallLetter: /[a-z]/.test(e.currentTarget.value),
							lessthan8: e.currentTarget.value.length > 7,
							specialCharacter: /[!@#$%^&*()_+]/.test(e.currentTarget.value),
						});
					}}
					required
					className="w-full text-neutral-600 mt-2"
					placeholder="Enter password"
				/>
			</div>
			{password.length > 0 && !allValidationsPassed && (
				<div className="mt-4 border rounded-lg p-3 text-neutral-500 text-sm">
					<p className={`${validation.hasCapital && "text-green-600"}`}>
						{validation.hasCapital ? "✓" : "✗"} Password must contain a capital
						letter
					</p>
					<p className={`${validation.hasSmallLetter && "text-green-600"}`}>
						{validation.hasSmallLetter ? "✓" : "✗"} Password must contain a
						small letter
					</p>
					<p className={`${validation.hasNumber && "text-green-600"}`}>
						{validation.hasNumber ? "✓" : "✗"} Password must contain a Number
					</p>
					<p className={`${validation.lessthan8 && "text-green-600"}`}>
						{!validation.lessthan8 ? "✓" : "✗"} Password must at least 8
						characters
					</p>
					<p className={`${validation.specialCharacter && "text-green-600"}`}>
						{validation.specialCharacter ? "✓" : "✗"} Password must contain a
						special Character
					</p>
				</div>
			)}
			<button
				// formAction={signup}
				onClick={async (e) => {
					const formData = new FormData();
					formData.append("email", email);
					formData.append("password", password);
					e.preventDefault();
					setisLoading(true);
					try {
						const res = await signup(formData);
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
				disabled={!allValidationsPassed || isLoading}
			>
				{isLoading ? "Creating free account" : "Create free account"}
			</button>
		</div>
	);
};

export default Validator;
