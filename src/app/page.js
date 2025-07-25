"use client";
import { Image } from "primereact/image";
import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import Experience from "@/components/Experience";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
	return (
		<main>
			<section id="hero" className="bg-main-yellow flex justify-center ">
				<div className="container mx-100 my-10 flex flex-col gap-10">
					<p className="text-[280px] font-light leading-none text-right text-main-text">
						ECE <br /> SAYDUT.
					</p>

					<div className="text-main-text text-right text-6xl">
						<Typewriter
							strings={["Graphic Designer", "Motion Designer"]}
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
							className="underline hover:font-normal"
						>
							Medicana International
						</a>
					</div>
				</div>
			</section>
			<section id="aboutme">
				<div className="container mx-auto flex px-4 gap-10 justify-center items-center">
					<div className="flex flex-col w-1/2 justify-center gap-10 px-20">
						<h2 className="text-8xl text-main-text font-light">
							About Me
						</h2>
						<p className="font-light">
							I’m an Istanbul-based Art Director specializing in
							motion design and creative storytelling. I’ve worked
							on 360° campaigns and international broadcasting
							projects for global brands.
							<br />
							<br />
							<br />
							My focus is on crafting impactful visuals for social
							media, branding, and motion graphics. With a strong
							command of Adobe After Effects, Photoshop,
							Illustrator, and other tools, I bring ideas to life
							through dynamic design. I’m passionate about
							blending creativity with strategy to deliver
							compelling visual experiences. You can explore more
							of my work on Behance.
						</p>
					</div>
					<Image
						alt="ece-saydut"
						src="/images/Ece-About-Me.jpg"
						quality={100}
						width={700}
						height={700}
					/>
				</div>
			</section>
			<section id="experience" className="bg-main-text pt-10">
				<div className="container mx-auto">
					<h2 className="text-white text-7xl font-light">
						Experience
					</h2>
					<div className="flex flex-col gap-10">
						<Experience
							title={"Graphic Designer"}
							workDate={"Jun 24 - Current "}
							link={
								"https://www.linkedin.com/company/medicana-health-group/"
							}
							company={"Medicana Health Group, Ist"}
						/>
						<Experience
							title={"Designer"}
							workDate={"Sep 22 - Sep 23 "}
							link={"https://www.linkedin.com/company/yuddy/"}
							company={"Jaliri, Ist"}
						/>
						<Experience
							title={"Graphic Designer"}
							workDate={"Dec 21 - Aug 22 "}
							link={"https://www.linkedin.com/company/acunmedya/"}
							company={"Acun Medya Global, Dominican Republic"}
						/>
						<Experience
							title={"Art Director Intern"}
							workDate={"Oct 19 - May 20"}
							link={"https://www.linkedin.com/company/4129grey/"}
							company={"4129Grey, Ist"}
						/>
						<Experience
							title={"Graphic Design Intern"}
							workDate={"Aug 15 - Jun 16 "}
							company={"Gelişim Reklam, Ist"}
						/>
					</div>
					<div className="pt-15 py-1">
						<h2 className="text-white text-7xl font-light">
							Education
						</h2>
						<Experience
							title={"Visual Communication Design"}
							workDate={"Sep 16 - Jun 12 "}
							link={"https://bau.edu.tr/"}
							company={"Bahçeşehir University, Ist"}
						/>
					</div>
				</div>
			</section>
			<section id="selectedportfolios" className="bg-main-yellow">
				<div className="container mx-auto py-10 flex flex-col gap-10">
					<h2 className="font-light text-7xl text-main-text self-start">
						Selected Portfolios
					</h2>
					<div className="grid grid-cols-2 gap-x-40 gap-y-10 w-2/3 self-center">
						<div className="w-full h-100 overflow-hidden ">
							<Image
								src="/portfolio-images/DaVinci.png"
								alt="ece-port-img"
								quality={100}
								width={500}
								height={500}
								preview
								className="h-full"
							/>
						</div>
						<div className="w-full h-100 overflow-hidden">
							<Image
								src="/portfolio-images/kidney-transplant.png"
								alt="ece-port-img"
								quality={100}
								width={500}
								height={500}
								preview
								className="h-full object-cover"
							/>
						</div>
						<div className="w-full h-100 overflow-hidden content-center ">
							<Image
								src="/portfolio-images/jaliri-red.png"
								alt="ece-port-img"
								quality={100}
								width={500}
								height={500}
								preview
								className="object-cover"
							/>
						</div>
						<div className="w-full h-100 overflow-hidden content-center">
							<Image
								src="/portfolio-images/Exathlon.jpg"
								alt="ece-port-img"
								width={500}
								height={500}
								preview
							/>
						</div>
					</div>
					<p className="self-center">
						These are just a selection of my work, for more please
						follow this
						<Link
							href="/portfolio"
							className="p-1 font-medium text-lg rounded-full transition-all hover:p-2 duration-150 text-main-text hover:text-main-yellow hover:bg-main-text"
							aria-label="Portfolio Link"
						>
							link!
						</Link>
					</p>
				</div>
			</section>
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="cursor-pointer w-12 h-12 rounded-full fixed right-5 bottom-5"
			>
				<div className="rounded-full bg-main-yellow w-12 h-12 hover:shadow-[0px_0px_15px_6px_rgba(103,0,0,1)] transition-all duration-150 flex justify-center items-center">
					<FaArrowUp size={24} />
				</div>
			</button>
		</main>
	);
}
