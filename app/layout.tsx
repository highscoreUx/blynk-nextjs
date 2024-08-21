import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s - Blynk",
		default: "Blynk | Simple and Fast URL Shortening Service",
	},
	description:
		"Shorten and manage your URLs easily with our URL shortener. Create short, shareable links in seconds and track their performance effortlessly.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster position="top-center" />
				{children}
			</body>
		</html>
	);
}
