import { cn } from "../../lib/utils";

//the parent card container
export const DBCard = ({ children, className = "" }) => {
	return (
		<div
			className={cn(
				"grid grid-cols-2 p-2 w-55 h-28 rounded-md shadow-sm bg-zinc-600 shadow-zinc-600/50",
				className
			)}
		>
			{children}
		</div>
	);
};

// for text column
export const LeftColumn = ({ children, className = "" }) => {
	return (
		<div className={cn("row-span-2 my-auto gap-y-1 grid", className)}>
			{children}
		</div>
	);
};

// for image/icon column
export const RightColumn = ({ children, className = "" }) => {
	return (
		<div
			className={cn(
				"row-span-2 grid items-center justify-end text-5xl mask-r-from-50% pe-1",
				className
			)}
		>
			{children}
		</div>
	);
};

// for more info column
export const BottomColumn = ({ children, className = "" }) => {
	return (
		<div
			className={cn(
				"col-span-2 text-[13px] self-center justify-center flex font-semibold mx-14 rounded-sm",
				className
			)}
		>
			{children}
		</div>
	);
};
