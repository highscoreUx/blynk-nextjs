import Container from "@/app/components/Container";
import TopNav from "@/app/components/TopNav";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<main className="bg-blue-50/30 min-h-screen">
			<TopNav />
			<Container>
				<div className="my-10 md:my-16">{children}</div>
			</Container>
		</main>
	);
};

export default layout;
