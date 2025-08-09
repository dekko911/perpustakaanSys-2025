import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ButtonDelete } from "../../components/ui/button";
import { InputSearch } from "../../components/ui/input";
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TBodyCellAction,
	THeadCell,
} from "../../components/ui/table";
import { AXIOS_INSTANCE, IMAGE_URL } from "../../constants/globalConstants";
import { AuthLayout } from "../../layouts/auth";
import Loading from "/src/assets/images/pyramid-19507.gif";

export const BooksPage = () => {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isSearch, setIsSearch] = useState("");

	useEffect(() => {
		const fetchBooks = async () => {
			const res = await AXIOS_INSTANCE.get(`books?q=${isSearch}`);

			setBooks(res.data.books);
			setIsLoading(false);
		};

		fetchBooks();
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
					<h1 className="font-semibold text-2xl">Books Page</h1>
					<InputSearch
						onChange={(e) => {
							setIsSearch(e.target.value);
						}}
						placeholder="Search Book . . ."
						className="ms-auto"
					/>
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
					<TableBody>
						{books.map((book, i) => (
							<TableRow key={i}>
								<TBodyCell>{i + 1}</TBodyCell>
								<TBodyCell>{book.id_buku}</TBodyCell>
								<TBodyCell>{book.judul_buku}</TBodyCell>
								<TBodyCell>
									<img
										src={IMAGE_URL + `books/${book.cover_buku}`}
										alt="cover buku"
									/>
								</TBodyCell>
								<TBodyCell>{book.penulis}</TBodyCell>
								<TBodyCell>{book.pengarang}</TBodyCell>
								<TBodyCell>{book.tahun}</TBodyCell>
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
