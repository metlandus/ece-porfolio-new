"use client";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-transparent sticky top-0 z-50 flex justify-between py-10 px-20 items-center">
			<Link href="/" className="text-2xl font-bold text-main-text">
				Ece
			</Link>
			<nav className="flex gap-6">
				<Link
					href="/"
					className={`text-main-text py-3 px-1 hover:font-semibold hover:text-lg transition-all duration-150 focus:border-b-2 focus:border-main-text`}
				>
					Home
				</Link>
				<Link
					href="/#aboutme"
					className="text-main-text py-3 px-1 hover:font-semibold hover:text-lg transition-all duration-150 focus:border-b-2 focus:border-main-text"
				>
					About
				</Link>
				<Link
					href="/#experience"
					className="text-main-text py-3 px-1 hover:font-semibold hover:text-lg transition-all duration-150 focus:border-b-2 focus:border-main-text"
				>
					Experience
				</Link>
				<Link
					href="/portfolio"
					className={`text-main-text py-3 px-1 hover:font-semibold hover:text-lg transition-all duration-150 focus:border-b-2 focus:border-main-text `}
				>
					Portfolio
				</Link>
			</nav>
			<button
				onClick={() =>
					window.scrollTo({ top: 3600, behavior: "smooth" })
				}
				className="relative py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 overflow-hidden group"
			>
				{" "}
				<span className="absolute inset-0 bg-main-yellow animate-pulse group-hover:animate-none group-hover:bg-main-yellow transition-colors duration-250"></span>
				<span className="relative z-10 text-main-text">
					Let&apos;s Talk
				</span>
			</button>
		</header>
	);
}
