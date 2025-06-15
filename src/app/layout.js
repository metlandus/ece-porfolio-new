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
				<header className="bg-transparent sticky top-0 z-50 flex justify-between p-4 items-center">
					<Link href="/" className="text-2xl text-main-text">
						ECE
					</Link>
					<nav className="hidden lg:flex space-x-6">
						<Link
							href="/#about"
							className="text-gray-700 hover:text-blue-500"
						>
							About
						</Link>
						<Link
							href="/#experience"
							className="text-gray-700 hover:text-blue-500"
						>
							Experience
						</Link>
						<Link
							href="/portfolio"
							className="text-gray-700 hover:text-blue-500"
						>
							Portfolio
						</Link>
						<Link
							href="/#contact"
							className="text-gray-700 hover:text-blue-500"
						>
							Contact
						</Link>
					</nav>
					<button>Let&apos;s Talk</button>
				</header>
				{children}
			</body>
		</html>
	);
}
