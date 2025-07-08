import "./globals.css";
import Header from "../components/Header";
import { Poppins } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";

export const metadata = {
	title: "Ece Saydut",
	description: "Web Portfolio for Ece Saydut",
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={poppins.className}>
			<PrimeReactProvider>
				<body>
					<section>
						<Header />
					</section>
					{children}
					<footer className="bg-main-yellow w-full text-main-text">
						<div className="container mx-auto flex justify-end">
							Made with ♡ by
							<a href="#" className="pl-1">
								BurgerDev
							</a>
						</div>
					</footer>
				</body>
			</PrimeReactProvider>
		</html>
	);
}
