import Link from "next/link";
import HeroImage from "../assets/HeroImage";
import Container from "./Container";

const Hero = () => {
	return (
		<Container className="my-10 flex items-center">
			<div
				className="flex flex-col gap-6 [&>*]:flex-1 md:flex-row items-center"
				id="hero"
			>
				<div className="flex flex-col gap-2 items-center justify-center">
					<h1 className="tracking-tight text-center">
						Blynk Your Links <br /> in a Flash!
					</h1>
					<p className="text-[1.15rem] leading-relaxed mt-4">
						Transform your lengthy URLs into sleek, shareable links with Blynk —
						your one-stop tool for quick and effortless link shortening!
					</p>
					<Link
						href={"/login"}
						className="bg-blue-700 text-white p-4 rounded-lg mt-4 text-sm focus:outline-blue-300/30 focus:outline-2 hover:scale-[1.05]"
					>
						Get Started For Free
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
