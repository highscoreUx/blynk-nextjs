import Link from "next/link";
import { signInWithEmail } from "./actions";

import Image from "next/image";
import Container from "@/app/components/Container";
import UtilityNav from "@/app/components/UtilityNav";

export default function LoginPage() {
	return (
		<main className="h-screen bg-white">
			<UtilityNav />
			<div className="flex flex-col md:flex-row   gap-6 pt-10">
				<div className="flex items-center flex-1 justify-center flex-col mx-4 md:mx-6">
					<div className="md:w-[400px]">
						<h2 className="md:text-center">Log in with Magic Link</h2>
						<p className="mt-2 text-sm md:text-center">
							Enter your email address to login with magic link
						</p>

						<form className="mt-6">
							<div className="flex flex-col items-start gap-2">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									className="w-full text-neutral-600"
									placeholder="example@user.com"
								/>
							</div>

							<button
								formAction={signInWithEmail}
								className="p-3 bg-blue-700 text-white rounded-lg mt-6 w-full"
							>
								Continue
							</button>
						</form>
						<p className="mt-6 text-sm">
							By creating an account, you agree to Blynk's{" "}
							<span>
								<Link href={"/terms-of-service"} className="underline">
									Terms of Service
								</Link>
							</span>
							,{" "}
							<Link href={"/privacy-policy"} className="underline">
								Privacy Policy
							</Link>{" "}
							and{" "}
							<Link href={"/usepolicy"} className="underline">
								Acceptable Use Policy.
							</Link>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
