import Link from "next/link";
import { signup } from "./actions";

export default function LoginPage() {
	return (
		<main>
			<div className="flex flex-col md:flex-row  h-screen gap-6 bg-white">
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
						<button className="p-3 border text-neutral-500 rounded-lg mt-6 w-full">
							Continue with Google
						</button>

						<p className="relative mt-6 grid grid-cols-[1fr_0fr_1fr] gap-4 before:h-[0.01rem] before:bg-gray-300 before:my-auto after:bg-gray-300 after:h-[0.01rem] after:my-auto">
							OR
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
							<div className="flex flex-col items-start mt-4 gap-2">
								<label htmlFor="password">Password:</label>
								<input
									id="password"
									name="password"
									type="password"
									required
									className="w-full text-neutral-600"
									placeholder="Enter password"
								/>
							</div>
							<button
								formAction={signup}
								className="p-3 bg-blue-700 text-white rounded-lg mt-6 w-full"
							>
								Create free account
							</button>
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
