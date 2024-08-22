import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export const GET = async (request: NextRequest, { params }) => {
	const supabase = createClient();

	const geturl = async (short: string) => {
		let { data, error } = await supabase
			.from("url")
			.select("*")
			.eq("short", short);

		if (error) {
			return null;
		}

		return data;
	};

	const url = await geturl(params.short);

	if (url?.length === 0) {
		notFound();
	}

	//@ts-ignore
	const perform = url[0].visitCount + 1;

	const updateTable = async (short: string) => {
		let { error, data } = await supabase
			.from("url")
			.update({ visitCount: perform })
			.eq("short", short)
			.single();

		if (error) {
			return error;
		}

		return data;
	};

	const updated = await updateTable(params.short);
	//@ts-ignore
	const redirectUrl = url[0].redirectUrl;

	return NextResponse.redirect(redirectUrl);
};
