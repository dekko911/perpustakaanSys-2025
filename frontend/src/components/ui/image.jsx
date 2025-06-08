import { cn } from "../../lib/utils";

export const DefaultProfile = ({ className = "" }) => {
	return (
		<img
			src="/src/assets/images/profile.png"
			alt="profile"
			className={cn("w-11", className)}
		/>
	);
};
