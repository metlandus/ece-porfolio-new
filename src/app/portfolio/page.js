"use client";

import React, { useRef, useState } from "react";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Image } from "primereact/image";
import NextImage from "next/image";

const GROUP_SIZE = 6;
const GROUP_COUNT = 5;

// Create 5 groups, each with 6 images
const groups = Array.from({ length: GROUP_COUNT }, (_, groupIdx) => {
	const start = groupIdx * GROUP_SIZE + 1;
	return Array.from({ length: GROUP_SIZE }, (_, i) => ({
		itemImageSrc: `/portfolio/medicana/Medicana-${start + i}.png`,
		thumbnailImageSrc: `/portfolio/medicana/Medicana-${start + i}.png`,
		alt: `Medicana ${start + i}`,
		title: `Medicana ${start + i}`,
	}));
});

export default function Portfolio() {
	const galleriaRef = useRef(null);
	const [activeGroup, setActiveGroup] = useState(0);

	return (
		<main className="bg-main-yellow min-h-screen">
			<section className="container mx-auto py-10">
				<h1 className="text-4xl mb-8">My Portfolio</h1>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{groups.map((group, idx) => (
						<button
							key={idx}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveGroup(idx);
								setTimeout(() => {
									galleriaRef.current?.show();
								}, 0);
							}}
						>
							<Image
								src={group[0].thumbnailImageSrc}
								alt={group[0].alt}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>
						</button>
					))}
				</div>

				<Galleria
					ref={galleriaRef}
					value={groups[activeGroup]}
					activeIndex={0}
					numVisible={4}
					circular
					fullScreen
					showThumbnails
					showItemNavigators
					showItemNavigatorsOnHover
					item={(item) => (
						<NextImage
							src={item.itemImageSrc}
							alt={item.alt}
							width={1000}
							height={1000}
							className="w-fit object-contain max-h-[80vh]"
						/>
					)}
					thumbnail={(item) => (
						<NextImage
							src={item.thumbnailImageSrc}
							alt={item.alt}
							width={100}
							height={100}
							quality={100}
							className="w-[90px] aspect-square object-cover rounded-lg"
						/>
					)}
					style={{ maxWidth: 900 }}
					thumbnailsPosition="bottom"
					showIndicators={false}
					showIndicatorsOnItem={false}
				/>
			</section>
		</main>
	);
}
