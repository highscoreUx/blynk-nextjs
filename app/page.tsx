import HeroImage from "./assets/HeroImage";
import Features from "./components/Features";
import Hero from "./components/Hero";
import LandingNav from "./components/LandingNav";

const page = () => {
	return (
		<main>
			<LandingNav />
			<Hero />
			<Features />
		</main>
	);
};

export default page;
