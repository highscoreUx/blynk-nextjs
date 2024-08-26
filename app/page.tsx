import HeroImage from "./assets/HeroImage";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LandingNav from "./components/LandingNav";

const page = () => {
	return (
		<main>
			<LandingNav />
			<Hero />
			<Features />
			<Footer />
		</main>
	);
};

export default page;
