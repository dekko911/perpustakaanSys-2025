import { InputSearch } from "../../components/ui/input";
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	THeadCell,
} from "../../components/ui/table";
import { AuthLayout } from "../../layouts/auth";

export const BooksPage = () => {
	return (
		<AuthLayout>
			<div className="flex flex-col">
				<div className="flex">
					<h1 className="font-semibold text-2xl">Books Page</h1>
					<InputSearch placeholder="Search Book . . ." className="ms-auto" />
				</div>

				<Table>
					<TableHead>
						<TableRow>
							<THeadCell>No.</THeadCell>
							<THeadCell>Id Buku</THeadCell>
							<THeadCell>Judul Buku</THeadCell>
							<THeadCell>Cover Buku</THeadCell>
							<THeadCell>Penulis</THeadCell>
							<THeadCell>Pengarang</THeadCell>
							<THeadCell>Tahun</THeadCell>
							<THeadCell className="border-none">Action</THeadCell>
						</TableRow>
					</TableHead>
					<TableBody></TableBody>
				</Table>
			</div>
		</AuthLayout>
	);
};
