import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="container mx-auto flex justify-between items-center py-4">
				<div className="logo">
					<h2 className="text-2xl font-bold">Ece</h2>
				</div>

				<button className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
					Let&apos;s Talk
				</button>
			</div>

			<main>
				<section className="slider-area h-screen flex items-center justify-center">
					<div className="text-center">
						<h1 className="text-5xl font-bold">Ece Saydut.</h1>
						<p className="mt-4 text-lg">
							Graphic designer at
							<a
								href="https://www.linkedin.com/company/medicana-health-group/"
								target="_blank"
								className="text-blue-500 hover:underline"
							>
								Medicana Health Group
							</a>
						</p>
					</div>
				</section>

				<section id="about" className="about-area py-20">
					<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
						<div>
							<h2 className="text-3xl font-bold mb-4">
								About Me
							</h2>
							<p className="mb-4">
								I’m an Istanbul-based Art Director specializing
								in motion design and creative storytelling. I’ve
								worked on 360° campaigns and international
								broadcasting projects for global brands.
							</p>
							<p>
								My focus is on crafting impactful visuals for
								social media, branding, and motion graphics.
								With a strong command of Adobe After Effects,
								Photoshop, Illustrator, and other tools, I bring
								ideas to life through dynamic design. I’m
								passionate about blending creativity with
								strategy to deliver compelling visual
								experiences.
							</p>
						</div>
						<div>
							<Image
								src="/assets/img/gallery/Ece About Me (2).jpg"
								alt="Ece Saydut"
								width={500}
								height={500}
								className="rounded-lg"
							/>
						</div>
					</div>
				</section>

				<section id="experience" className="py-20 bg-gray-100">
					<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
						<div className="text-center">
							<span className="text-4xl font-bold">5 years</span>
							<p>of experience</p>
						</div>
						<div className="text-center">
							<span className="text-4xl font-bold">$40M+</span>
							<p>invested in projects I was involved in</p>
						</div>
						<div className="text-center">
							<span className="text-4xl font-bold">Multiple</span>
							<p>industry awards</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
