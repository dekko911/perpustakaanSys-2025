import { Link } from "react-router";
import { ButtonLogin } from "../components/ui/button";
import { InputLogin } from "../components/ui/input";
import { LabelLogin } from "../components/ui/label";
import { GuestLayout } from "../layouts/guest";

// jangan lupa pasang validation error !!!!!!
export const LoginPage = () => {
	return (
		<GuestLayout>
			<div className="p-10 w-120 z-10 motion-preset-focus-sm">
				<img
					src="/src/assets/images/bookshead.png"
					alt="logo"
					className="w-15 mx-auto mb-5"
				/>
				<h1 className="text-center font-semibold text-xl mb-2">
					Log in to your account
				</h1>
				<p className="text-white/50 text-center mb-8 text-sm">
					Enter your email and password below to log in
				</p>
				<form>
					<LabelLogin>Email address</LabelLogin>
					<InputLogin
						name="email"
						type="email"
						placeholder="email@example.com"
					/>

					<LabelLogin>Password</LabelLogin>
					<InputLogin name="password" type="password" placeholder="*********" />

					<ButtonLogin>Log in</ButtonLogin>
				</form>
				<h1 className="text-center mt-7 text-sm">
					Don't have an account?
					<Link
						to="/sign-up"
						className="underline underline-offset-2 ms-1.5 hover:text-white/70 duration-300"
					>
						Sign Up
					</Link>
				</h1>
			</div>
		</GuestLayout>
	);
};
