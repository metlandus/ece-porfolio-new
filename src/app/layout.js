import "./globals.css";
import Header from "../components/Header";
import { Poppins } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import Footer from "@/components/Footer";

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
					<Footer />
				</body>
			</PrimeReactProvider>
		</html>
	);
}
