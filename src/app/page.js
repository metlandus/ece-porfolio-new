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
					<div className="container mx-100 my-5 flex flex-col gap-10">
						<p className="text-[280px] font-light leading-none text-right text-main-text">
							ECE <br /> SAYDUT.
						</p>

						<div className="text-main-text text-right text-6xl">
							<Typewriter
								strings={[
									"Graphic Designer",
									"Motion Designer",
								]}
								delay={150}
								pauseAfterTyping={2200}
								deleteSpeed={2}
							/>
						</div>
						<div className="flex gap-2 font-light text-main-text text-right justify-end text-3xl">
							<p className="">Graphic Designer at </p>
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
				<section id="aboutme" className="">
					<div className="container mx-auto flex px-4 gap-10 justify-center items-center">
						<div className="flex flex-col w-1/2 justify-center gap-10 px-20">
							<h2 className="text-8xl text-main-text font-light">
								About Me
							</h2>
							<p className="font-light">
								I’m an Istanbul-based Art Director specializing
								in motion design and creative storytelling. I’ve
								worked on 360° campaigns and international
								broadcasting projects for global brands.
								<br />
								<br />
								<br />
								My focus is on crafting impactful visuals for
								social media, branding, and motion graphics.
								With a strong command of Adobe After Effects,
								Photoshop, Illustrator, and other tools, I bring
								ideas to life through dynamic design. I’m
								passionate about blending creativity with
								strategy to deliver compelling visual
								experiences. You can explore more of my work on
								Behance.
							</p>
						</div>
						<Image
							alt="ece-saydut"
							// href="/public/images/Ece About Me (2).jpg"
							src={"/images/Ece-About-Me.jpg"}
							width={600}
							height={600}
						/>
					</div>
				</section>
				<section id="aboudawdtme" className="bg-gray-200">
					<div className="container mx-auto px-4">
						<p>MEtemetmemetEcCECECE</p>
					</div>
				</section>
				<section id="aboudawdtme" className="bg-gray-300">
					<div className="container mx-auto px-4">
						<p>MEtemetmemetEcCECECE</p>
					</div>
				</section>
			</main>
		</div>
	);
}
