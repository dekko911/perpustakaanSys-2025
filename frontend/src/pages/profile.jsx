import { useCallback } from "react";
import { ButtonProfile } from "../components/ui/button";
import { PhotoContainer } from "../components/ui/image";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { AuthLayout } from "../layouts/auth";
import { FaSave } from "react-icons/fa";

export const ProfilePage = () => {
	const handleProfile = useCallback(async () => {}, []);

	return (
		<AuthLayout>
			<div className="grid grid-rows-2 h-70 m-3 relative">
				<form onSubmit={handleProfile} className="flex gap-3 items-center pb-4">
					<PhotoContainer className="w-25 rounded-full me-3" />
					<ButtonProfile>Change Photo</ButtonProfile>
					{/* bingung mau di kasi apa, input atau button? */}
					<ButtonProfile className="bg-white text-black flex items-center gap-x-1.5 hover:bg-white/50">
						<FaSave />
						Save
					</ButtonProfile>
				</form>

				<form onSubmit={handleProfile}>
					<Label htmlFor="name">Name</Label>
					<Input name="name" />

					<div className="my-3">
						<Label htmlFor="email">Email</Label>
						<Input type="email" name="email" />
					</div>

					<div className="grid grid-cols-2 gap-x-4 mt-3 w-auto">
						<Label htmlFor="password">Password</Label>
						<Label htmlFor="password_confirmation">Confirm Password</Label>

						<Input type="password" name="password" className="xl:w-133" />
						<Input
							type="password"
							name="password_confirmation"
							className="xl:w-138"
						/>
					</div>

					<ButtonProfile className="mt-5 absolute right-0 flex items-center gap-x-1.5 hover:text-white/50">
						<FaSave />
						Save
					</ButtonProfile>
				</form>
			</div>
		</AuthLayout>
	);
};
