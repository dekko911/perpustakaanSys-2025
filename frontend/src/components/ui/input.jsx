import { cn } from "../../lib/utils";

export const Input = ({
	name = "",
	type = "text",
	defaultValue,
	className,
	...props
}) => {
	return (
		<input
			name={name}
			type={type}
			defaultValue={defaultValue}
			className={cn("w-full", className)}
			{...props}
		/>
	);
};

export const InputLogin = ({
	name = "",
	type = "text",
	placeholder = "",
	defaultValue,
	className,
	...props
}) => {
	return (
		<input
			name={name}
			type={type}
			defaultValue={defaultValue}
			placeholder={placeholder}
			autoComplete="current-password"
			className={cn(
				"focus:outline-2 focus:outline-zinc-400/20 w-full bg-transparent text-white rounded-md py-1.5 border border-zinc-500/50 p-3 mb-5 mt-2",
				className
			)}
			{...props}
		/>
	);
};

export const InputSignUp = ({
	name = "",
	type = "text",
	placeholder = "",
	defaultValue,
	className,
	...props
}) => {
	return (
		<input
			name={name}
			type={type}
			defaultValue={defaultValue}
			placeholder={placeholder}
			autoComplete="current-password"
			className={cn(
				"focus:outline-2 focus:outline-zinc-400/20 w-full bg-transparent text-white rounded-md py-1.5 text-sm border border-zinc-500/50 p-3 mb-4 mt-1.5",
				className
			)}
			required
			{...props}
		/>
	);
};
