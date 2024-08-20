"use client";

import { useState } from "react";

const Validator = () => {
	const [password, setpassword] = useState("");
	const [validation, setValidation] = useState({
		hasCapital: false,
		hasNumber: false,
		hasSmallLetter: false,
		lessthan8: false,
		specialCharacter: false,
	});
	return (
		<div className="w-full">
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
						lessthan8: e.currentTarget.value.length < 8,
						specialCharacter: /[!@#$%^&*()_+]/.test(e.currentTarget.value),
					});
					console.log(validation);
					console.log(password);
				}}
				required
				className="w-full text-neutral-600 mt-2"
				placeholder="Enter password"
			/>
			{password.length > 0 && (
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
					<p className={`${!validation.lessthan8 && "text-green-600"}`}>
						{!validation.lessthan8 ? "✓" : "✗"} Password must at least 8
						characters
					</p>
					<p className={`${validation.specialCharacter && "text-green-600"}`}>
						{validation.specialCharacter ? "✓" : "✗"} Password must contain a
						special Character
					</p>
				</div>
			)}
		</div>
	);
};

export default Validator;
