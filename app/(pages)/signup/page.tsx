import Link from "next/link";
import { googleSignUp, signup } from "./actions";
import Validator from "../../components/Validator";
import { FcGoogle } from "react-icons/fc";
import logo from "@/app/assets/Logo.svg";
import Image from "next/image";

export default function LoginPage() {
	return (
		<main>
			<div className="md:hidden  self-start p-4 border-b sticky top-0 mb-14">
				<Link href={"/"}>
					<div className="flex gap-2 items-center">
						<Image src={logo} alt="Blynk"></Image>
						<p className="text-blue-700 font-semibold text-[24px]">Blynk</p>
					</div>
				</Link>
			</div>
			<div className="flex flex-col md:flex-row  md:h-screen gap-6 bg-white">
				<div className="absolute hidden md:block top-6 left-6">
					<Link href={"/"}>
						<div className="flex gap-2 items-center">
							<Image src={logo} alt="Blynk"></Image>
							<p className="text-blue-700 font-semibold text-[24px]">Blynk</p>
						</div>
					</Link>
				</div>
				<div className="flex items-center flex-1 justify-center flex-col mx-4 md:mx-6">
					<div className="md:w-[400px]">
						<h2>Create your account</h2>
						<p className="mt-2 text-sm">
							Already have an account?
							<span>
								<Link href={"/login"} className="font-medium text-blue-700">
									{" "}
									Log in
								</Link>
							</span>{" "}
							or{" "}
							<span>
								<Link href={"/auth/sso"} className="font-medium text-blue-700">
									{" "}
									Log in sso
								</Link>
							</span>
						</p>
						<form>
							<button
								type="submit"
								className="p-3 border text-neutral-500 rounded-lg mt-6 w-full flex items-center justify-center gap-2"
								formAction={googleSignUp}
							>
								<span>
									<FcGoogle size={20} />
								</span>
								Continue with Google
							</button>
						</form>

						<p className="relative mt-6 grid grid-cols-[1fr_0fr_1fr] gap-4 before:h-[0.01rem] before:bg-gray-300 before:my-auto after:bg-gray-300 after:h-[0.01rem] after:my-auto">
							OR
						</p>
						<form className="mt-6">
							<Validator />
						</form>
						<p className="mt-6 text-sm">
							By creating an account, you agree to Blynk's{" "}
							<span>
								<Link href={"/termsofservice"} className="underline">
									Terms of Service
								</Link>
							</span>
							,{" "}
							<Link href={"/privacypolicy"} className="underline">
								Privacy Policy
							</Link>{" "}
							and{" "}
							<Link href={"/usepolicy"} className="underline">
								Acceptable Use Policy.
							</Link>
						</p>
					</div>
				</div>
				<div className="bg-blue-100 w-[40%] hidden md:block">Image</div>
			</div>
		</main>
	);
}
