import React from "react";
import { FiCalendar } from "react-icons/fi";

const page = () => {
	return (
		<div>
			<div>
				<h2>Your Blynks</h2>
				<p className="text-sm mt-1">Check out links you've shorten</p>
			</div>
			<div className="flex justify-between items-center mt-4">
				<button className="flex items-center justify-center gap-2 p-3 border bg-white rounded-lg text-sm">
					<span>
						<FiCalendar size={20} />
					</span>{" "}
					Filter by created date
				</button>
				<button className="flex items-center justify-center gap-2 p-3 border bg-white rounded-lg text-sm">
					<span>
						<FiCalendar size={20} />
					</span>{" "}
					Filter by created date
				</button>
			</div>
		</div>
	);
};

export default page;
