"use client";

import React, { useRef, useState } from "react";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Image } from "primereact/image";
import NextImage from "next/image";

const GROUP_SIZE = 6;
const GROUP_COUNT = 5;

// Images
const imageGroups = Array.from({ length: GROUP_COUNT }, (_, groupIdx) => {
	const start = groupIdx * GROUP_SIZE + 1;
	return Array.from({ length: GROUP_SIZE }, (_, i) => ({
		itemImageSrc: `/portfolio/medicana/Medicana-${start + i}.png`,
		thumbnailImageSrc: `/portfolio/medicana/Medicana-${start + i}.png`,
		alt: `Medicana ${start + i}`,
		title: `Medicana ${start + i}`,
	}));
});
const jaliriImageGroups = Array.from({ length: 1 }, (_, groupIdx) => {
	const start = groupIdx * 2 + 1;
	return Array.from({ length: 2 }, (_, i) => ({
		itemImageSrc: `/portfolio/jaliri/Jaliri-${start + i}.png`,
		thumbnailImageSrc: `/portfolio/jaliri/Jaliri-${start + i}.png`,
		alt: `Medicana ${start + i}`,
		title: `Medicana ${start + i}`,
	}));
});

// Koc
const kocImageGroups = [
	Array.from({ length: 4 }, (_, i) => ({
		itemImageSrc: `/portfolio/koc/Koc-${i + 1}.png`,
		thumbnailImageSrc: `/portfolio/koc/Koc-${i + 1}.png`,
		alt: `Koc ${i + 1}`,
		title: `Koc ${i + 1}`,
	})),
];

// Mastercard
const mastercardImageGroups = [
	Array.from({ length: 2 }, (_, i) => ({
		itemImageSrc: `/portfolio/mastercard/Mastercard-${i + 1}.png`,
		thumbnailImageSrc: `/portfolio/mastercard/Mastercard-${i + 1}.png`,
		alt: `Mastercard ${i + 1}`,
		title: `Mastercard ${i + 1}`,
	})),
];

// Divan
const divanImageGroups = [
	Array.from({ length: 3 }, (_, i) => ({
		itemImageSrc: `/portfolio/divan/Divan-${i + 1}.png`,
		thumbnailImageSrc: `/portfolio/divan/Divan-${i + 1}.png`,
		alt: `Divan ${i + 1}`,
		title: `Divan ${i + 1}`,
	})),
];

// Hershey-Sub (2 groups, 3 images each)
const hersheySubImageGroups = [
	Array.from({ length: 6 }, (_, i) => ({
		itemImageSrc: `/portfolio/hershey-sub/Hershey-Sub-${i + 1}.jpg`,
		thumbnailImageSrc: `/portfolio/hershey-sub/Hershey-Sub-${i + 1}.jpg`,
		alt: `Hershey-Sub ${i + 1}`,
		title: `Hershey-Sub ${i + 1}`,
	})),
];

// Videos
const videoGroups = Array.from({ length: 4 }, (_, groupIdx) => {
	const start = groupIdx * 2 + 1;
	return Array.from({ length: 2 }, (_, i) => ({
		videoSrc: `/portfolio/medicana/Medicana-V-${start + i}.mp4`,
		alt: `Medicana Video ${start + i}`,
		title: `Medicana Video ${start + i}`,
	}));
});

export default function Portfolio() {
	// Images
	const imageGalleriaRef = useRef(null);
	const [activeImageGroup, setActiveImageGroup] = useState(0);
	const [activeCompany, setActiveCompany] = useState("medicana"); // NEW

	// Videos
	const videoGalleriaRef = useRef(null);
	const [activeVideoGroup, setActiveVideoGroup] = useState(0);

	// Helper to get the correct group array
	const getActiveImageGroup = () => {
		if (activeCompany === "medicana") {
			return imageGroups[activeImageGroup];
		} else if (activeCompany === "jaliri") {
			return jaliriImageGroups[activeImageGroup];
		} else if (activeCompany === "koc") {
			return kocImageGroups[activeImageGroup];
		} else if (activeCompany === "mastercard") {
			return mastercardImageGroups[activeImageGroup];
		} else if (activeCompany === "divan") {
			return divanImageGroups[activeImageGroup];
		} else if (activeCompany === "hershey-sub") {
			return hersheySubImageGroups[activeImageGroup];
		}
		return [];
	};

	return (
		<main className="bg-main-yellow min-h-screen">
			<section className="container mx-auto py-10">
				<h1 className="text-4xl mb-8">My Portfolio</h1>
				{/* Images Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{imageGroups.map((group, idx) => (
						<button
							key={`medicana-${idx}`}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveCompany("medicana");
								setActiveImageGroup(idx);
								setTimeout(() => {
									imageGalleriaRef.current?.show();
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
					{jaliriImageGroups.map((group, idx) => (
						<button
							key={`jaliri-${idx}`}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveCompany("jaliri");
								setActiveImageGroup(idx);
								setTimeout(() => {
									imageGalleriaRef.current?.show();
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
					{kocImageGroups.map((group, idx) => (
						<button
							key={`koc-${idx}`}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveCompany("koc");
								setActiveImageGroup(idx);
								setTimeout(() => {
									imageGalleriaRef.current?.show();
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
					{mastercardImageGroups.map((group, idx) => (
						<button
							key={`mastercard-${idx}`}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveCompany("mastercard");
								setActiveImageGroup(idx);
								setTimeout(() => {
									imageGalleriaRef.current?.show();
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

					{divanImageGroups.map((group, idx) => (
						<button
							key={`divan-${idx}`}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveCompany("divan");
								setActiveImageGroup(idx);
								setTimeout(() => {
									imageGalleriaRef.current?.show();
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
					{hersheySubImageGroups.map((group, idx) => (
						<button
							key={`hershey-sub-${idx}`}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveCompany("hershey-sub");
								setActiveImageGroup(idx);
								setTimeout(() => {
									imageGalleriaRef.current?.show();
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
					<div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition">
						<Image
							src="/portfolio/misc/Grid-1.jpg"
							alt="Grid-1"
							preview
							style={{
								height: "100%",
								width: "100%",
							}}
							imageStyle={{
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>
				</div>
				{/* Images Galleria */}
				<Galleria
					ref={imageGalleriaRef}
					value={getActiveImageGroup()}
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

				{/* Videos Section */}
				<h2 className="text-3xl mt-16 mb-8">Videos</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{videoGroups.map((group, idx) => (
						<button
							key={idx}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveVideoGroup(idx);
								setTimeout(() => {
									videoGalleriaRef.current?.show();
								}, 0);
							}}
						>
							<video
								src={group[0].videoSrc}
								muted
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									background: "#000",
								}}
							/>
						</button>
					))}
				</div>
				{/* Videos Galleria */}
				<Galleria
					ref={videoGalleriaRef}
					value={videoGroups[activeVideoGroup]}
					activeIndex={0}
					numVisible={4}
					circular
					fullScreen
					showThumbnails
					showItemNavigators
					showItemNavigatorsOnHover
					item={(item) => (
						<video
							src={item.videoSrc}
							controls
							style={{
								width: "100%",
								maxHeight: "80vh",
								background: "#000",
								objectFit: "contain",
							}}
						/>
					)}
					thumbnail={(item) => (
						<video
							src={item.videoSrc}
							muted
							style={{
								width: "90px",
								aspectRatio: "1/1",
								objectFit: "cover",
								borderRadius: "0.5rem",
								background: "#000",
							}}
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
