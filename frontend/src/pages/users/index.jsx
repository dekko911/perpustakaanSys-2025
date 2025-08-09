import { useEffect, useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
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
import { AuthLayout } from "../../layouts/auth/index";
import Loading from "/src/assets/images/pyramid-19507.gif";

export const UsersPage = () => {
	const [users, setUsers] = useState([]);
	const [isSearch, setIsSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await AXIOS_INSTANCE.get(`users?q=${isSearch}`);

			setUsers(res.data.users);
			setIsLoading(false);
		};

		fetchUsers();
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
					<h1 className="font-semibold text-2xl me-0.5">Users Page</h1>
					<Link to="/users/create" className="w-0">
						<FaPlus className="hover:text-amber-600 cursor-pointer duration-100" />
					</Link>

					<InputSearch
						onChange={(e) => {
							setIsSearch(e.target.value);
						}}
						placeholder="Search User . . ."
						className="ms-auto"
					/>
				</div>

				<Table>
					<TableHead>
						<TableRow>
							<THeadCell>No.</THeadCell>
							<THeadCell>Name</THeadCell>
							<THeadCell className="w-60">Email</THeadCell>
							<THeadCell className="w-60">Username</THeadCell>
							<THeadCell className="w-20">Roles</THeadCell>
							<THeadCell className="w-40">Permissions</THeadCell>
							<THeadCell className="w-15">Avatar</THeadCell>
							<THeadCell className="border-none">Action</THeadCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((user, i) => (
							<TableRow key={i}>
								<TBodyCell>{i + 1}</TBodyCell>
								<TBodyCell>{user.name}</TBodyCell>
								<TBodyCell>{user.email}</TBodyCell>
								<TBodyCell>{user.username}</TBodyCell>
								<TBodyCell>{user.role}</TBodyCell>
								<TBodyCell>{user.permissions}</TBodyCell>
								<TBodyCell>
									<img
										src={IMAGE_URL + `avatar/${user.avatar}`}
										alt="avatar"
										className="w-18 rounded-[4cap] object-cover object-center"
									/>
								</TBodyCell>
								<TBodyCellAction>
									<Link className="w-0 py-4">
										<FaEdit className="w-15 h-7" />
									</Link>
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
