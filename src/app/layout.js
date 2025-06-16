import "./globals.css";
import Link from "next/link";

export const metadata = {
	title: "Ece Saydut",
	description: "Web Portfolio for Ece Saydut",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="antialiased">
				<section>
					<header className="bg-transparent sticky top-0 z-50 flex justify-between py-10 px-20 items-center">
						<Link
							href="/"
							className="text-2xl font-bold text-main-text"
						>
							Ece
						</Link>
						<nav className="flex gap-6">
							<Link
								href="/#about"
								className="text-main-text py-3 px-1 hover:text-main-yellow focus:border-b-2 focus:border-main-text"
							>
								About
							</Link>
							<Link
								href="/#experience"
								className="text-main-text py-3 px-1 hover:text-blue-500 focus:border-b-2 focus:border-main-text"
							>
								Experience
							</Link>
							<Link
								href="/portfolio"
								className="text-main-text py-3 px-1 hover:text-blue-500 focus:border-b-2 focus:border-main-text"
							>
								Portfolio
							</Link>
							<Link
								href="/#contact"
								className="text-main-text py-3 px-1 hover:text-blue-500 focus:border-b-2 focus:border-main-text"
							>
								Contact
							</Link>
						</nav>
						<button>Let&apos;s Talk</button>
					</header>
				</section>
				{children}
			</body>
		</html>
	);
}
