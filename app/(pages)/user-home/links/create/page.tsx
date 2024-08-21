import React from "react";
import InputComponent from "./InputComponent";

const page = () => {
	return (
		<div className="md:w-[500px] md:mx-auto">
			<div>
				<h2>Create Short Link</h2>
				<p className="text-sm mt-2">
					Fill in all details to create your fast short link
				</p>
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
