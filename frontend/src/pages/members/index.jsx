import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ButtonDelete } from "../../components/ui/button";
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
import { AXIOS_INSTANCE, IMAGE_URL } from "../../constants/globalConstants";
import { AuthLayout } from "../../layouts/auth";
import Loading from "/src/assets/images/pyramid-19507.gif";

export const MembersPage = () => {
	const [members, setMembers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isSearch, setIsSearch] = useState("");

	useEffect(() => {
		const fetchMembers = async () => {
			const res = await AXIOS_INSTANCE.get(`members?q=${isSearch}`);

			setMembers(res.data.members);
			setIsLoading(false);
		};

		fetchMembers();
	}, [isSearch]);

	return (
		<AuthLayout>
			<div className="flex flex-col relative">
				{isLoading && (
					<img
						src={Loading}
						alt="loading..."
						className="absolute w-100 top-28 left-90"
					/>
				)}

				<div className="flex">
					<h1 className="font-semibold text-2xl">Members Page</h1>
					<InputSearch
						onChange={(e) => {
							setIsSearch(e.target.value);
						}}
						placeholder="Search Member . . ."
						className="ms-auto"
					/>
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
					<TableBody>
						{members.map((member, i) => (
							<TableRow key={i}>
								<TBodyCell>{i + 1}</TBodyCell>
								<TBodyCell>{member.id_anggota}</TBodyCell>
								<TBodyCell>{member.nama}</TBodyCell>
								<TBodyCell>{member.jenis_kelamin}</TBodyCell>
								<TBodyCell>{member.kelas}</TBodyCell>
								<TBodyCell>{member.no_telepon}</TBodyCell>
								<TBodyCell>
									<img
										src={IMAGE_URL + `profil/${member.profil_anggota}`}
										alt="profil"
									/>
								</TBodyCell>
								<TBodyCellAction>
									<Link>Edit</Link>
									<ButtonDelete />
								</TBodyCellAction>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</AuthLayout>
	);
};
