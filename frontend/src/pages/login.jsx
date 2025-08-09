import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router";
import { ButtonLogin } from "../components/ui/button";
import { InputLogin } from "../components/ui/input";
import { LabelLogin } from "../components/ui/label";
import { AXIOS_URL_GUEST } from "../constants/globalConstants";
import { GuestLayout } from "../layouts/guest";
import { swalToast } from "../lib/sweet-alert";
import Loading from "/src/assets/images/waiting-7579.gif";

export const LoginPage = () => {
	axios.defaults.withCredentials = true;
	axios.defaults.withXSRFToken = true;

	const [formLogin, setFormLogin] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			setIsLoading(true);

			await AXIOS_URL_GUEST.get("sanctum/csrf-cookie");
			const res = await AXIOS_URL_GUEST.post("api/login", formLogin);

			if (res.data) {
				const token = res.data.token.plainTextToken;
				const name = res.data.user.name;
				const email = res.data.user.email;
				const username = res.data.user.username;
				const role = res.data.user.role;
				const avatar = res.data.user.avatar;

				Cookies.set("token", token);
				Cookies.set("name", name);
				Cookies.set("email", email);
				Cookies.set("username", username);
				Cookies.set("role", role);
				Cookies.set("avatar", avatar);

				if (res.data.status && res.data.status === "success") {
					window.location.href = "/dashboard";
				}
			}
		} catch (err) {
			// console.error(e);
			if (err.status && err.status === 401) {
				swalToast("error", `${err.response.data.message}`, 433);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<GuestLayout className="relative">
			{isLoading && (
				<div className="bg-white/7 backdrop-blur-2xl py-[5vh] mx-auto z-20 absolute text-center rounded-2xl motion-preset-focus-sm">
					<img src={Loading} alt="loading" className="w-50" />
					<p className="font-bold text-xl text-shadow-2xs">Please Wait . . .</p>
				</div>
			)}
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
				<form onSubmit={handleLogin}>
					<LabelLogin>Email address or Username</LabelLogin>
					<InputLogin
						name="login"
						id="login"
						type="text"
						placeholder="email@example.com or username ..."
						onKeyUp={(e) => {
							setFormLogin((prev) => {
								return { ...prev, [e.target.name]: e.target.value };
							});
						}}
					/>

					<LabelLogin>Password</LabelLogin>
					<InputLogin
						name="password"
						id="password"
						type="password"
						placeholder="*********"
						onKeyUp={(e) => {
							setFormLogin((prev) => {
								return { ...prev, [e.target.name]: e.target.value };
							});
						}}
					/>

					<div className="flex items-center gap-x-2">
						<InputLogin
							type="checkbox"
							className="focus:outline-0 py-0 px-0 mb-0 mt-0 w-3"
							name="remember"
							id="remember"
							onChange={(e) => {
								setFormLogin((prev) => {
									return { ...prev, [e.target.name]: e.target.value };
								});
							}}
						/>
						<LabelLogin>Remember Me</LabelLogin>
					</div>

					<ButtonLogin>Log in</ButtonLogin>
				</form>
				<h1 className="text-center mt-5 text-sm">
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
