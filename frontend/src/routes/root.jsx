import { BrowserRouter, Route, Routes } from "react-router";
import { BooksPage } from "../pages/books";
import { CirculationsPage } from "../pages/circulations";
import { DashboardPage } from "../pages/dashboard";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { UsersPage } from "../pages/users";
import { BookPage } from "../pages/buku";

export const RootRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/users" element={<UsersPage />} />
				<Route path="/books" element={<BooksPage />} />
				<Route path="/circulations" element={<CirculationsPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/book" element={<BookPage />} />
			</Routes>
		</BrowserRouter>
	);
};
