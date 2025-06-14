import { FaSyncAlt, FaUser, FaUsers, FaUserSecret } from "react-icons/fa";
import { MdCardMembership, MdDashboard } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { useLocation } from "react-router";
import { cn } from "../lib/utils";

export const Header = ({ className = "" }) => {
	const location = useLocation();

	return (
		<div
			className={cn(
				"w-full bg-transparent z-10 py-4 px-5 text-white flex justify-between",
				className
			)}
		>
			<div className="flex items-center gap-x-1.5 text-lg">
				{/* path url logo */}
				{(location.pathname === "/dashboard" && <MdDashboard />) ||
					(location.pathname === "/users" && <FaUsers />) ||
					(location.pathname === "/books" && <SiBookstack />) ||
					(location.pathname === "/circulations" && <FaSyncAlt />) ||
					(location.pathname === "/roles" && <FaUserSecret />) ||
					(location.pathname === "/members" && <MdCardMembership />)}

				{/* path url name */}
				<h1 className="font-semibold">
					{(location.pathname === "/dashboard" && "Dashboard") ||
						(location.pathname === "/users" && "Users") ||
						(location.pathname === "/books" && "Books") ||
						(location.pathname === "/circulations" && "Circulations") ||
						(location.pathname === "/roles" && "Roles") ||
						(location.pathname === "/members" && "Members")}
				</h1>
			</div>

			<h1 className="flex items-center gap-x-1 text-sm pe-3">
				<FaUser /> (for user role)
			</h1>
		</div>
	);
};
