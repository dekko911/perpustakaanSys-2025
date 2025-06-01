import { GiBookshelf } from "react-icons/gi";
import {
	BottomColumn,
	DBCard,
	LeftColumn,
	RightColumn,
} from "../components/ui/card";
import { AuthLayout } from "../layouts/auth";
import { Link } from "react-router";
import { FiExternalLink } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";

export const DashboardPage = () => {
	return (
		<AuthLayout>
			<div className="flex gap-x-5 m-3">
				{/* 1 */}
				<DBCard className="bg-red-500 shadow-red-500/50">
					<LeftColumn>
						<p className="font-semibold">5</p>
						<h1>Books</h1>
					</LeftColumn>
					<RightColumn>
						<GiBookshelf />
					</RightColumn>
					<BottomColumn className="bg-red-600 hover:bg-red-700">
						<Link className="flex items-center gap-x-1">
							More Info
							<FiExternalLink />
						</Link>
					</BottomColumn>
				</DBCard>
				{/* 2 */}
				<DBCard className="bg-yellow-500 shadow-yellow-500/50">
					<LeftColumn>
						<p className="font-semibold">5</p>
						<h1>Members</h1>
					</LeftColumn>
					<RightColumn className="">
						<LuUsers />
					</RightColumn>
					<BottomColumn className="bg-yellow-600 hover:bg-yellow-700">
						<Link className="flex items-center gap-x-1">
							More Info
							<FiExternalLink />
						</Link>
					</BottomColumn>
				</DBCard>
			</div>
		</AuthLayout>
	);
};
