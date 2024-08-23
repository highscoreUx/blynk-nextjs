import React from "react";
import Container from "./Container";
import Image from "next/image";
import welcome from "@/app/assets/welcome.png";
import createQR from "@/app/assets/createQR.png";
import yourQR from "@/app/assets/yourQR.png";

const Features = () => {
	return (
		<div className="bg-gray-100 py-14">
			<Container>
				<div className="flex flex-col gap-12">
					<div className="flex flex-col-reverse lg:flex-row [&>*]:flex-1 lg:items-center items-start gap-2 lg:gap-28">
						<div>
							<h2 className="lg:text-[3rem]">Quick Action</h2>
							<p className="mt-2">
								With Blynk, you can create links or generate QR codes instantly,
								streamlining your workflow and saving time.
							</p>
						</div>
						<div>
							<Image
								src={welcome}
								alt="Quick Actions"
								unoptimized
								className="h-[500px] lg:w-[500px] object-cover rounded-lg"
							/>
						</div>
					</div>
					<div className="flex flex-col-reverse lg:flex-row-reverse [&>*]:flex-1 lg:items-center items-start gap-2 lg:gap-28">
						<div>
							<h2 className="lg:text-[3rem]">Customize QR Code</h2>
							<p className="mt-2">
								Easily personalize your QR codes with Blynk, adjusting colors,
								shapes, and logos to match your brand or style.
							</p>
						</div>
						<div>
							<Image
								src={createQR}
								alt="customize QR"
								unoptimized
								className="h-[500px] lg:w-[500px] object-cover rounded-lg"
							/>
						</div>
					</div>
					<div className="flex flex-col-reverse lg:flex-row [&>*]:flex-1 lg:items-center items-start gap-2 lg:gap-28">
						<div>
							<h2 className="lg:text-[3rem]">Manage QR Codes</h2>
							<p className="mt-2">
								Effortlessly organize and track your QR codes with Blynk,
								allowing you to monitor performance and update content whenever
								needed.
							</p>
						</div>
						<div>
							<Image
								src={yourQR}
								alt="Manage QR"
								unoptimized
								className="h-[500px] lg:w-[500px] object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Features;
