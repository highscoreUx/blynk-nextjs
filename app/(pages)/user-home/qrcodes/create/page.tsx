import React from "react";
import InputComponent from "./InputComponent";

const page = () => {
	return (
		<div className="md:w-[600px] md:mx-auto">
			<div>
				<h2>Create a QR</h2>
				<p className="text-sm mt-2">Fill in all details to create a QR code</p>
			</div>
			<div className="mt-8">
				<form>
					<InputComponent />
				</form>
			</div>
		</div>
	);
};

export default page;
