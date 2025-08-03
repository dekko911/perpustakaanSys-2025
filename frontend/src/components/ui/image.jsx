import { cn } from "../../lib/utils";

export const PhotoContainer = ({
	className = "",
	imageSrc = "/src/assets/images/profile.png",
}) => {
	return <img src={imageSrc} alt="profile" className={cn("w-11", className)} />;
};
