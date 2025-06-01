import { BrowserRouter, Route, Routes } from "react-router";
import { BooksPage } from "../pages/books";
import { CirculationsPage } from "../pages/circulations";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { MembersPage } from "../pages/members";
import { RolesPage } from "../pages/roles";
import { SignUpPage } from "../pages/sign-up";
import { UsersPage } from "../pages/users";

export const RootRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/books" element={<BooksPage />} />

				<Route path="/circulations" element={<CirculationsPage />} />

				<Route path="/dashboard" element={<DashboardPage />} />

				<Route index element={<LoginPage />} />

				<Route path="/members" element={<MembersPage />} />

				<Route path="/roles" element={<RolesPage />} />

				<Route path="/sign-up" element={<SignUpPage />} />

				<Route path="/users" element={<UsersPage />} />
			</Routes>
		</BrowserRouter>
	);
};
