import { FaUsers, FaUsersCog } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { IoSyncCircle } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { ButtonDashboard } from "../components/ui/button";
import {
	BottomColumn,
	DBCard,
	LeftColumn,
	RightColumn,
} from "../components/ui/card";
import { AuthLayout } from "../layouts/auth";

export const DashboardPage = () => {
	return (
		<AuthLayout>
			<div className="flex justify-center pb-3">
				<h1 className="font-semibold text-4xl">Dashboard Administrator</h1>
			</div>

			<div className="flex flex-wrap gap-y-4 gap-x-5 m-4 lg:m-2 md:m-2 md:snap-y md:snap-mandatory md:max-h-80 sm:overflow-y-scroll lg:overflow-y-hidden md:overflow-y-hidden xl:overflow-y-hidden sm:m-5 sm:snap-y sm:snap-mandatory sm:max-h-57">
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
						<ButtonDashboard />
					</BottomColumn>
				</DBCard>
				{/* 2 */}
				<DBCard className="bg-yellow-500 shadow-yellow-500/50">
					<LeftColumn>
						<p className="font-semibold">5</p>
						<h1>Members</h1>
					</LeftColumn>
					<RightColumn>
						<LuUsers />
					</RightColumn>
					<BottomColumn className="bg-yellow-600 hover:bg-yellow-700">
						<ButtonDashboard />
					</BottomColumn>
				</DBCard>
				{/* 3 */}
				<DBCard className="bg-green-500 shadow-green-500/50">
					<LeftColumn>
						<p className="font-semibold">5</p>
						<h1>Circulations</h1>
					</LeftColumn>
					<RightColumn>
						<IoSyncCircle />
					</RightColumn>
					<BottomColumn className="bg-green-600 hover:bg-green-700">
						<ButtonDashboard />
					</BottomColumn>
				</DBCard>
				{/* 4 */}
				<DBCard className="bg-blue-500 shadow-blue-500/50">
					<LeftColumn>
						<p className="font-semibold">5</p>
						<h1>Users Active</h1>
					</LeftColumn>
					<RightColumn>
						<FaUsers />
					</RightColumn>
					<BottomColumn className="bg-blue-600 hover:bg-blue-700">
						<ButtonDashboard />
					</BottomColumn>
				</DBCard>
				{/* 5 */}
				<DBCard className="bg-purple-500 shadow-purple-500/50">
					<LeftColumn>
						<p className="font-semibold">5 (filter count)</p>
						<h1>Roles</h1>
					</LeftColumn>
					<RightColumn>
						<FaUsersCog />
					</RightColumn>
					<BottomColumn className="bg-purple-600 hover:bg-purple-700">
						<ButtonDashboard />
					</BottomColumn>
				</DBCard>
			</div>
		</AuthLayout>
	);
};
