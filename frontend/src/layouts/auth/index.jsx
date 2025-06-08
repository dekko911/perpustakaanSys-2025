import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { BackgroundGrids } from "../../components/ui/background-grids";

export const AuthLayout = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [isLoading]);

	if (isLoading) {
		return (
			<div className="bg-linear-90 h-screen w-full from-zinc-900 to-zinc-950 flex flex-col gap-y-2 items-center justify-center text-white text-2xl font-semibold">
				<img
					src="/src/assets/images/loading.gif"
					alt="loading"
					className="w-30 h-30"
				/>
				<p>Loading. . .</p>
			</div>
		);
	} else {
		return (
			<BackgroundGrids className="flex bg-linear-90 from-zinc-900 to-zinc-950 text-white">
				<Sidebar />
				<div className="w-full flex flex-col bg-black m-4 z-10 rounded-md ">
					<Header />
					<main className="grow rounded-sm p-5 border-t-1 border-b-1 border-zinc-500/25">
						{children}
					</main>
					<Footer />
				</div>
			</BackgroundGrids>
		);
	}
};
