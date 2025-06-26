"use client";

import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Image from "next/image";

const images = Array.from({ length: 30 }, (_, i) => ({
	itemImageSrc: `/portfolio/medicana/Medicana-${i + 1}.png`,
	thumbnailImageSrc: `/portfolio/medicana/Medicana-${i + 1}.png`,
	alt: `Medicana ${i + 1}`,
	title: `Medicana ${i + 1}`,
}));

const itemTemplate = (item) => (
	<Image
		src={item.itemImageSrc}
		alt={item.alt}
		quality={100}
		width={15000}
		height={15000}
		style={{
			width: "100%",
			height: "60vh",
			objectFit: "contain",
			background: "#3a491c",
		}}
	/>
);
const thumbnailTemplate = (item) => (
	<Image
		src={item.thumbnailImageSrc}
		alt={item.alt}
		quality={80}
		width={100}
		height={100}
		style={{
			width: "100%",
			aspectRatio: "1/1",
			objectFit: "cover",
			borderRadius: "0.5rem",
		}}
	/>
);
export default function Portfolio() {
	return (
		<main className="bg-main-yellow min-h-screen">
			<section className="container mx-auto py-10">
				<h1 className="text-4xl mb-8">My Portfolio</h1>
				<div className="card">
					<Galleria
						value={images}
						numVisible={8}
						showThumbnails
						showItemNavigators
						showItemNavigatorsOnHover
						circular
						item={itemTemplate}
						thumbnail={thumbnailTemplate}
						style={{ maxWidth: 900 }}
						thumbnailsPosition="bottom"
						showIndicators={false}
						showIndicatorsOnItem={false}
					/>
				</div>
			</section>
		</main>
	);
}
