"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();
	return (
		<footer
			className={`${
				pathname === "/portfolio"
					? "bg-main-text text-main-yellow"
					: "bg-main-yellow text-main-text"
			}  w-full`}
		>
			<div className="container mx-auto flex justify-end">
				Made with ♡ by
				<a href="#" className="pl-1">
					BurgerDev
				</a>
			</div>
		</footer>
	);
}
