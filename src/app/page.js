"use client";
// import Image from "next/image";
import { Image } from "primereact/image";
import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import Experience from "@/components/Experience";
import { FaBehance, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
							className="underline hover:text-main-text/80"
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
			<section id="experience" className="bg-main-text">
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
							className="pl-1 text-main-text hover:underline"
						>
							link!
						</Link>
					</p>
				</div>
			</section>
			<section id="contactme" className="bg-main-text">
				<div className="container mx-auto">
					<h2>Do you want to contact me?</h2>
					<h3>
						You can download my CV from{" "}
						<a
							href="/ECE_SAYDUT_DESIGNER_CV.pdf"
							download
							aria-label="Download my CV"
						>
							Here
						</a>
					</h3>
					<h3>And you can reach me out from my socials.</h3>

					<div className="flex gap-4 mt-4">
						<a
							href="https://www.behance.net/ecesaydut"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Behance"
							className="text-white hover:text-blue-400 text-3xl"
						>
							<FaBehance />
						</a>
						<a
							href="https://www.linkedin.com/in/ece-saydut-4a05a71b8/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="text-white hover:text-blue-400 text-3xl"
						>
							<FaLinkedin />
						</a>
						<a
							href="mailto:ecesaydut@gmail.com"
							aria-label="Email"
							className="text-white hover:text-blue-400 text-3xl"
						>
							<FaEnvelope />
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
