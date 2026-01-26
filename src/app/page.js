"use client";
import { Image } from "primereact/image";
import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import Experience from "@/components/Experience";
import { FaArrowUp } from "react-icons/fa";
import { FaFont, FaBullhorn, FaVideo } from "react-icons/fa";

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
							Marketing-focused graphic and motion designer with
							experience in international broadcast projects,
							digital campaigns and multi-channel marketing
							materials. Skilled in creating conversion-driven
							visual content for social media, advertising, web
							and print. Strong background in motion graphics,
							social media creatives and campaign-based design.
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
							title="Graphic Designer"
							workDate="Istanbul | Jun 24 - Current "
							link="https://www.linkedin.com/company/medicana-health-group/"
							company="Medicana Health Group"
							para="Created static and motion-based social media content for digital marketing and advertising campaigns
                                    Designed performance-oriented ad visuals, story formats and video covers for social platforms
                                    Produced print materials including brochures, patient consent forms, fair branding assets and roll-ups
                                    Designed presentation visuals and website banners aligned with corporate brand guidelines
                                    Led the visual production for the Bosnia hospital launch, delivering all campaign and promotional assets
                                    Collaborated with marketing teams to ensure visual consistency across digital, print and event materials"
						/>
						<Experience
							title="Jr. Art Director"
							workDate="Istanbul | Sep 22 - Sep 23 "
							link="https://www.linkedin.com/company/yuddy/"
							company="Jaliri"
							para="Designed conversion-focused social media creatives, digital ads and web banners for international e-commerce campaigns
                                    Produced visual content for women’s apparel and men’s footwear targeting global markets
                                    Adapted designs across multiple platforms to support paid advertising and website promotions
                                    Worked closely with marketing and e-commerce teams to align visuals with sales and campaign goals"
						/>
						<Experience
							title="Motion Designer"
							workDate="Dominican Republic | Dec 21 - Jul 22 "
							link="https://www.linkedin.com/company/acunmedya/"
							company="Acun Media Global"
							para="Created motion graphic assets for international broadcast projects including Survivor and Exatlon franchises
                                    Designed game graphics, versus screens and show packages for multiple regional versions
                                    Adapted existing visual systems for new episodes, scores and contestants while maintaining brand consistency
                                    Contributed to title sequences and broadcast graphics production workflows
                                    Assisted in post-production processes including green screen compositing and visual clean-up
                                    Collaborated with designers and editors under tight broadcast deadlines"
						/>
						<Experience
							title="Art Director Intern"
							workDate="Istanbul | Oct 19 - May 20"
							link="https://www.linkedin.com/company/4129grey/"
							company="4129Grey"
							para="Contributed to social media design processes for brands including Divan Group, Koç Holding, Pegasus Airlines, Mercedes-Benz, Volvo, Penti, Teknosa, GSK, MetLife and Mastercard"
						/>
						<Experience
							title="Graphic Design Intern"
							workDate="Istanbul | Aug 15 - Jun 16 "
							company="Gelişim Reklam"
							para="Took part in the production of BTL and printed advertising materials for various brands"
						/>
					</div>
					<div className="pt-15 py-1">
						<h2 className="text-white text-7xl font-light">
							Education
						</h2>
						<Experience
							title="Visual Communication Design"
							workDate="Istanbul | Sep 16 - Jun 12 "
							link="https://bau.edu.tr/"
							company="Bahçeşehir University"
						/>
						<Experience
							title="Graphic Design & Photography"
							workDate="Istanbul | 2012 - 2016"
							company="Istanbul Chamber of Commerce Vocational & Technical High School"
						/>
					</div>
				</div>
			</section>
			<section id="selectedportfolios" className="bg-main-yellow">
				<div className="container mx-auto py-10 flex flex-col gap-10">
						<h2 className="font-light text-7xl text-main-text self-start">
							Skills
						</h2>
						<div className="grid grid-cols-4 gap-8 mt-10 w-2/3 self-center">
							<div className=" flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200">
								<Image
									src="/skills/adobe-after-effects-logo.png"
									width={48}
									height={48}
									alt="Adobe After Effects"
								/>
								<p className="text-center font-medium text-main-text">
									Adobe After Effects
								</p>
							</div>
							<div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200">
								<Image
									src="/skills/adobe-photoshop-logo.png"
									width={48}
									height={48}
									alt="Adobe Photoshop"
								/>

								<p className="text-center font-medium text-main-text">
									Adobe Photoshop
								</p>
							</div>
							<div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200">
								<Image
									src="/skills/adobe-illustrator-logo.png"
									width={48}
									height={48}
									alt="Adobe Illustrator"
								/>
								<p className="text-center font-medium text-main-text">
									Adobe Illustrator
								</p>
							</div>
							<div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200">
								<Image
									src="/skills/adobe-indesign-logo.png"
									width={48}
									height={48}
									alt="Adobe InDesign"
								/>
								<p className="text-center font-medium text-main-text">
									Adobe InDesign
								</p>
							</div>
							<div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200">
								<FaFont size={48} className="text-main-text" />
								<p className="text-center font-medium text-main-text">
									FontLab
								</p>
							</div>
							<div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200">
								<FaBullhorn
									size={48}
									className="text-main-text"
								/>
								<p className="text-center font-medium text-main-text">
									Social Media & Marketing
								</p>
							</div>
							<div className="col-span-2 flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-200">
								<FaVideo size={48} className="text-main-text" />
								<p className="text-center font-medium text-main-text">
									Motion Graphics & Short-form Ads
								</p>
						</div>
					</div>
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
