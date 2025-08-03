import { InputSearch } from "../../components/ui/input";
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TBodyCell,
	TBodyCellAction,
	THeadCell,
} from "../../components/ui/table";
import { AuthLayout } from "../../layouts/auth/index";

export const UsersPage = () => {
	return (
		<AuthLayout>
			<div className="flex flex-col">
				<div className="flex">
					<h1 className="font-semibold text-2xl">Users Page</h1>
					<InputSearch placeholder="Search User . . ." className="ms-auto" />
				</div>

				<Table>
					<TableHead>
						<TableRow>
							<THeadCell>No.</THeadCell>
							<THeadCell>Name</THeadCell>
							<THeadCell>Email</THeadCell>
							<THeadCell>Roles</THeadCell>
							<THeadCell>Permissions</THeadCell>
							<THeadCell>Avatar Profile</THeadCell>
							<THeadCell className="border-none">Action</THeadCell>
						</TableRow>
					</TableHead>
					<TableBody></TableBody>
				</Table>
			</div>
		</AuthLayout>
	);
};
