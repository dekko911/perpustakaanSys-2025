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
							<THeadCell>Id SKL</THeadCell>
							<THeadCell>Buku</THeadCell>
							<THeadCell>Peminjam</THeadCell>
							<THeadCell>Tanggal Pinjam</THeadCell>
							<THeadCell>Jatuh Tempo</THeadCell>
							<THeadCell>Denda</THeadCell>
							<THeadCell className="border-none">Action</THeadCell>
						</TableRow>
					</TableHead>
					<TableBody></TableBody>
				</Table>
			</div>
		</AuthLayout>
	);
};
