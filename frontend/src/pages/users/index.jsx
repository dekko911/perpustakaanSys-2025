import { InputSearch } from "../../components/ui/input";
import { AuthLayout } from "../../layouts/auth/index";

export const UsersPage = () => {
	return (
		<AuthLayout>
			<div className="flex flex-col">
				<div className="flex">
					<h1 className="font-semibold text-2xl">Users Page</h1>
					<InputSearch placeholder="Searching User . . ." className="ms-auto" />
				</div>
			</div>
		</AuthLayout>
	);
};
