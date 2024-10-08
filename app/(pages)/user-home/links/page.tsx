import { createClient } from "@/utils/supabase/server";
import React from "react";

import LinkComponent from "./LinkComponent";
import Link from "next/link";
import { IoLink } from "react-icons/io5";

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

const page = async () => {
	const getUser = async () => {
		const supabase = createClient();
		try {
			const {
				data: { user },
			} = await supabase.auth.getUser();

			return user?.id;
		} catch (error) {}
	};

	const user = await getUser();

	const getLink = async (user: string) => {
		const supabase = createClient();
		let { data, error } = await supabase
			.from("url")
			.select("*")
			.eq("userid", user);

		if (error) {
			console.log(error);
			return error;
		}

		return data;
	};

	const links = await getLink(user!);

	return (
		<div className="lg:w-[700px] md:mx-6 mx-4 lg:mx-auto">
			{
				//@ts-ignore
				links?.length > 0 && (
					<div>
						<h2>Your Blynks</h2>
						<p className="text-sm mt-1">Check out links you've shorten</p>
					</div>
				)
			}

			<div>
				{
					//@ts-ignore
					links.length > 0 ? (
						<LinkComponent link={links as links[]} />
					) : (
						<div>
							<div className="flex flex-col items-center justify-center mt-14 min-h-[30vh] gap-2">
								<IoLink size={200} className="text-gray-400" />
								<h2 className="text-center">You don't have any Link yet</h2>
								<p className="text-center">
									Please upload a link to manage your links
								</p>
								<Link
									href={"links/create"}
									className="p-3 bg-blue-700 text-white rounded-lg mt-4"
								>
									Create New Link
								</Link>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default page;
