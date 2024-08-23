import Link from "next/link";
import React from "react";

const notFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-2">
			<h2 className="md:w-[500px] text-center">
				We searched our link archive, but we found nothing.
			</h2>
			<p className="md:w-[500px] text-center">
				We know this not likely what you've expected, please go back to homepage
			</p>
			<Link href={"/"} className="p-3 bg-blue-700 text-white rounded-md mt-4">
				Go to Homepage
			</Link>
		</div>
	);
};

export default notFound;
