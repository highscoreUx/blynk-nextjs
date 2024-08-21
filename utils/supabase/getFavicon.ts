import axios from "axios";
import * as cheerio from "cheerio";

export const getFavicionUrl = async (url: string): Promise<string | null> => {
	try {
		const res = await axios.get(url);
		const html = await res.data;
		const $ = cheerio.load(html);
		let faviconUrl =
			$('link[rel="icon"]').attr("href") ||
			$('link[rel="shortcut icon"]').attr("href") ||
			$('link[rel="apple-touch-icon"]').attr("href");

		console.log(faviconUrl);

		if (faviconUrl && !faviconUrl.startsWith("http")) {
			const urlObj = new URL(url);
			faviconUrl = `${urlObj.origin}${faviconUrl}`;
		}

		return faviconUrl || `${new URL(url).origin}/favicon.ico`;
	} catch (error) {
		console.error("Error fetching favicon:", error);
		return null;
	}
};

export const getPageTitle = async (url: string): Promise<string | null> => {
	try {
		// Fetch the HTML content of the page
		const response = await axios.get(url);
		const html = await response.data;

		// Load the HTML into Cheerio
		const $ = cheerio.load(html);

		// Extract the title from the HTML
		const pageTitle = $("title").text();

		return pageTitle || null;
	} catch (error) {
		console.error("Error fetching page title:", error);
		return null;
	}
};
