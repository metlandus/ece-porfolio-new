"use client";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";

const images = [
	{
		itemImageSrc: "/portfolio-images/DaVinci.png",
		thumbnailImageSrc: "/portfolio-images/DaVinci.png",
		alt: "DaVinci",
		title: "DaVinci",
	},
	{
		itemImageSrc: "/portfolio-images/kidney-transplant.png",
		thumbnailImageSrc: "/portfolio-images/kidney-transplant.png",
		alt: "Kidney Transplant",
		title: "Kidney Transplant",
	},
	// ...add all your images here
];

export default function Portfolio() {
	const itemTemplate = (item) => (
		<Image
			src={item.itemImageSrc}
			alt={item.alt}
			style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }}
		/>
	);

	const thumbnailTemplate = (item) => (
		<Image
			src={item.thumbnailImageSrc}
			alt={item.alt}
			style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }}
		/>
	);

	return (
		<main className="bg-main-yellow min-h-screen">
			<section className="container mx-auto py-10">
				<h1 className="text-4xl mb-8">My Portfolio</h1>
				<Galleria
					value={images}
					numVisible={8}
					circular
					showThumbnails={false}
					showItemNavigators
					showIndicators
					item={itemTemplate}
					thumbnail={thumbnailTemplate}
					style={{ maxWidth: 900 }}
					responsiveOptions={[
						{
							breakpoint: "991px",
							numVisible: 6,
						},
						{
							breakpoint: "767px",
							numVisible: 4,
						},
						{
							breakpoint: "575px",
							numVisible: 2,
						},
					]}
					showItemNavigatorsOnHover
				/>
			</section>
		</main>
	);
}
