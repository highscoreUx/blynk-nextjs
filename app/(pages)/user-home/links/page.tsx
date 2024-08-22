import { createClient } from "@/utils/supabase/server";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import LinkComponent from "./LinkComponent";

const supabase = createClient();

interface links {
	id: number;
	created_at: string;
	redirectUrl: string;
	short: string;
	title: string;
	userid: string;
	expire: string;
	favicon: string;
	visitCount: number;
}

const getUser = async () => {
	try {
		const {
			data: { user },
		} = await supabase.auth.getUser();
		return user?.id;
	} catch (error) {}
};

//@ts-ignore
const user = await getUser();

const getLink = async (user: string) => {
	let { data, error } = await supabase
		.from("url")
		.select("*")
		.eq("userid", user);

	if (error) return error;

	return data;
};

//@ts-ignore
const links = await getLink(user!);

const page = () => {
	return (
		<div className="md:w-[700px] md:mx-6 lg:mx-auto">
			<div>
				<h2>Your Blynks</h2>
				<p className="text-sm mt-1">Check out links you've shorten</p>
			</div>
			{/* <div className="flex justify-between items-center mt-4">
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
			</div> */}
			<div>{links && <LinkComponent link={links as links[]} />}</div>
		</div>
	);
};

export default page;
