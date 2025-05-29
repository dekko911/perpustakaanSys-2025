import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";

export const AuthLayout = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <div></div>;
	} else {
		return (
			<div className="relative flex h-screen w-full bg-linear-90 from-zinc-900 to-zinc-950 text-white font-montserrat">
				<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
				<Sidebar />
				<div className="w-full flex flex-col bg-black m-4 z-10 rounded-md ">
					<Header />
					<main className="grow rounded-sm p-5 border-t-1 border-b-1 border-zinc-500/25">
						{children}
					</main>
					<Footer />
				</div>
			</div>
		);
	}
};
