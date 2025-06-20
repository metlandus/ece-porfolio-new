"use client";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

export default function Home() {
	return (
		<div>
			<main>
				<section
					id="hero"
					className="bg-main-yellow flex justify-center "
				>
					<div className="container mx-100 my-10 flex flex-col gap-10">
						<p className="text-[280px] font-light leading-none text-right text-main-text">
							ECE <br /> SAYDUT.
						</p>

						<div className="text-main-text text-right text-6xl">
							<Typewriter
								strings={[
									"Graphic Designer",
									"Motion Designer",
								]}
								delay={200}
								pauseAfterTyping={1500}
							/>
						</div>
						<div className="flex gap-2  text-main-text text-right justify-end text-3xl">
							<p className="font-extralight">
								Graphic Designer at{" "}
							</p>
							<a
								href="https://www.linkedin.com/company/medicana-health-group/"
								target="_blank"
								className="underline hover:text-main-text/80"
							>
								Medicana International
							</a>
						</div>
					</div>
				</section>
				<section id="aboutme" className="bg-gray-100">
					<div className="container mx-auto px-4">
						<p>MEtemetmemetEcCECECE</p>
					</div>
				</section>
				<section id="aboutme" className="bg-gray-200">
					<div className="container mx-auto px-4">
						<p>MEtemetmemetEcCECECE</p>
					</div>
				</section>
				<section id="aboutme" className="bg-gray-300">
					<div className="container mx-auto px-4">
						<p>MEtemetmemetEcCECECE</p>
					</div>
				</section>
			</main>
		</div>
	);
}
