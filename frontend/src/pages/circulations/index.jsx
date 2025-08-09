import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ButtonDelete } from "../../components/ui/button";
import { InputSearch } from "../../components/ui/input";
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	THeadCell,
} from "../../components/ui/table";
import { AXIOS_INSTANCE } from "../../constants/globalConstants";
import { AuthLayout } from "../../layouts/auth";
import Loading from "/src/assets/images/pyramid-19507.gif";

export const CirculationsPage = () => {
	const [circulations, setCirculations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isSearch, setIsSearch] = useState("");

	useEffect(() => {
		const fetchCirculations = async () => {
			const res = await AXIOS_INSTANCE.get(`circulations?q=${isSearch}`);

			setCirculations(res.data.circulations);
			setIsLoading(false);
		};

		fetchCirculations();
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
					<h1 className="font-semibold text-2xl">Circulations Page</h1>
					<InputSearch
						onChange={(e) => {
							setIsSearch(e.target.value);
						}}
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
					<TableBody>
						{circulations.map((circulation, i) => (
							<TableRow key={i}>
								<TBodyCell>{i + 1}</TBodyCell>
								<TBodyCell>{circulation.id_skl}</TBodyCell>
								<TBodyCell>{circulation?.book?.judul_buku}</TBodyCell>
								<TBodyCell>{circulation.peminjam}</TBodyCell>
								<TBodyCell>{circulation.tanggal_pinjam}</TBodyCell>
								<TBodyCell>{circulation.jatuh_tempo}</TBodyCell>
								<TBodyCell>{circulation.denda}</TBodyCell>
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
