import { InputSearch } from "../../components/ui/input";
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	THeadCell,
} from "../../components/ui/table";
import { AuthLayout } from "../../layouts/auth";

export const MembersPage = () => {
	return (
		<AuthLayout>
			<div className="flex flex-col">
				<div className="flex">
					<h1 className="font-semibold text-2xl">Members Page</h1>
					<InputSearch placeholder="Search Member . . ." className="ms-auto" />
				</div>

				<Table>
					<TableHead>
						<TableRow>
							<THeadCell>No.</THeadCell>
							<THeadCell>Member Id (slug)</THeadCell>
							<THeadCell>Name</THeadCell>
							<THeadCell>Gender (L/P)</THeadCell>
							<THeadCell>Grade</THeadCell>
							<THeadCell>No Hanphone</THeadCell>
							<THeadCell className="border-none">Action</THeadCell>
						</TableRow>
					</TableHead>
					<TableBody></TableBody>
				</Table>
			</div>
		</AuthLayout>
	);
};
