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
							<THeadCell>Id Anggota</THeadCell>
							<THeadCell>Nama</THeadCell>
							<THeadCell>Jenis Kelamin</THeadCell>
							<THeadCell>Kelas</THeadCell>
							<THeadCell>No Telepon</THeadCell>
							<THeadCell>Foto Anggota</THeadCell>
							<THeadCell className="border-none">Action</THeadCell>
						</TableRow>
					</TableHead>
					<TableBody></TableBody>
				</Table>
			</div>
		</AuthLayout>
	);
};
