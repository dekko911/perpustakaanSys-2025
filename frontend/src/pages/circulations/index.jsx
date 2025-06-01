import { InputSearch } from "../../components/ui/input";
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	THeadCell,
} from "../../components/ui/table";
import { AuthLayout } from "../../layouts/auth";

export const CirculationsPage = () => {
	return (
		<AuthLayout>
			<div className="flex flex-col">
				<div className="flex">
					<h1 className="font-semibold text-2xl">Circulations Page</h1>
					<InputSearch
						placeholder="Search Circulation . . ."
						className="ms-auto"
					/>
				</div>

				<Table>
					<TableHead>
						<TableRow>
							<THeadCell>No.</THeadCell>
							<THeadCell>SKL Id (slug)</THeadCell>
							<THeadCell>Book</THeadCell>
							<THeadCell>Borrowers</THeadCell>
							<THeadCell>Borrowing Date</THeadCell>
							<THeadCell>Due Date</THeadCell>
							<THeadCell>Fines</THeadCell>
							<THeadCell className="border-none">Action</THeadCell>
						</TableRow>
					</TableHead>
					<TableBody></TableBody>
				</Table>
			</div>
		</AuthLayout>
	);
};
