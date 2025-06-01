import { cn } from "../../lib/utils";

// for table layout
export const Table = ({ children, className = "" }) => {
	return (
		<table className={cn("mt-6 table table-fixed", className)}>
			{children}
		</table>
	);
};

// table row <tr>
export const TableRow = ({ children, className = "" }) => {
	return <tr className={cn("", className)}>{children}</tr>;
};

// table head <thead>
export const TableHead = ({ children, className = "" }) => {
	return (
		<thead className={cn("border-b border-zinc-500/30", className)}>
			{children}
		</thead>
	);
};

// table cell for head <th>
export const THeadCell = ({ children, className = "" }) => {
	return (
		<th className={cn("p-2 border-r border-zinc-500/30", className)}>
			{children}
		</th>
	);
};

// table body <tbody>
export const TableBody = ({ children, className = "" }) => {
	return <tbody className={cn("text-center", className)}>{children}</tbody>;
};

// table cell for body <td>
export const TBodyCell = ({ children, className = "" }) => {
	return (
		<td className={cn("p-2 border-r border-b border-zinc-500/30", className)}>
			{children}
		</td>
	);
};

// table cell body <td>, but this for action column
export const TBodyCellAction = ({ children, className = "" }) => {
	return (
		<td
			className={cn(
				"py-3 border-b border-zinc-500/30 flex gap-x-1 justify-center",
				className
			)}
		>
			{children}
		</td>
	);
};
