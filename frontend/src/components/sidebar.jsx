import Cookies from "js-cookie";
import { FaSyncAlt, FaUsers } from "react-icons/fa";
import { MdCardMembership, MdDashboard } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router";
import LogoBook from "../assets/images/bookshead.png";
import { cn } from "../lib/utils";
import { ButtonLogout } from "./ui/button";
import { ProfileCard } from "./ui/card";
import { PhotoContainer } from "./ui/image";
import {
	LOGGED_AVATAR,
	LOGGED_EMAIL,
	LOGGED_NAME,
} from "../constants/globalConstants";

export const Sidebar = ({ className = "" }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div
			className={cn(
				"w-[18rem] h-screen pt-4 ps-2 bg-transparent z-10 flex flex-col gap-y-1",
				className
			)}
		>
			<Link
				to="/dashboard"
				className="flex items-center rounded-lg hover:bg-white/15 ms-2 me-3 py-1"
			>
				<img src={LogoBook} alt="logo" className="w-13" />
				<h1 className="font-bold text-xl text-shadow-2xs text-shadow-amber-800/40">
					Per<span className="text-amber-800">Pustakaan</span>
				</h1>
			</Link>

			<p className="px-2.5 translate-y-3 mb-1.5 text-sm font-semibold text-white/50">
				Platform
			</p>

			<div className="p-2 text-sm font-semibold xl:h-[61vh] lg:h-[61vh] md:h-[61vh] sm:h-[61vh] flex flex-col gap-y-1.5">
				<Link
					to="/dashboard"
					className={`flex items-center gap-x-2 py-1.5 px-2 rounded-md hover:bg-white/30 ${location.pathname === "/dashboard" && `bg-white/15`}`}
				>
					<MdDashboard className="w-5 h-5" />
					Dashboard
				</Link>

				<Link
					to="/users"
					className={`flex items-center gap-x-2 py-1.5 px-2 rounded-md hover:bg-white/30 ${location.pathname === "/users" && `bg-white/15`}`}
				>
					<FaUsers className="w-5 h-5" />
					Users
				</Link>

				<Link
					to="/members"
					className={`flex items-center gap-x-2 py-1.5 px-2 rounded-md hover:bg-white/30 ${location.pathname === "/members" && `bg-white/15`}`}
				>
					<MdCardMembership />
					Members
				</Link>

				<Link
					to="/books"
					className={`flex items-center gap-x-2 py-1.5 px-2 rounded-md hover:bg-white/30 ${location.pathname === "/books" && `bg-white/15`}`}
				>
					<SiBookstack className="w-5 h-5" />
					Books
				</Link>

				<Link
					to="/circulations"
					className={`flex items-center gap-x-2 py-1.5 px-2 rounded-md hover:bg-white/30 ${location.pathname === "/circulations" && `bg-white/15`}`}
				>
					<FaSyncAlt className="w-5 h-5" />
					Circulations
				</Link>
			</div>

			<ProfileCard
				className={location.pathname === "/profile" && "bg-white/15"}
			>
				<PhotoContainer imageSrc={LOGGED_AVATAR} />
				<div className="col-span-2">
					<p className="text-md">{LOGGED_NAME}</p>
					<p className="text-xs">{LOGGED_EMAIL}</p>
				</div>
			</ProfileCard>

			<ButtonLogout
				onClick={() => {
					Cookies.remove("token");
					Cookies.remove("name");
					Cookies.remove("email");
					Cookies.remove("username");
					Cookies.remove("role");
					Cookies.remove("avatar");

					navigate("/");
				}}
			/>
		</div>
	);
};
