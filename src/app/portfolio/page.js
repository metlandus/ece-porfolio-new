"use client";

import React, { useRef, useState } from "react";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Image } from "primereact/image";
import NextImage from "next/image";

// Group definitions
const groupDefs = [
	{ key: "medicana", prefix: "medicana", groupCount: 5, groupSize: 6 },
	{ key: "jaliri", prefix: "jaliri", groupCount: 1, groupSize: 2 },
	{ key: "koc", prefix: "koc", groupCount: 1, groupSize: 4 },
	{ key: "mastercard", prefix: "mastercard", groupCount: 1, groupSize: 2 },
	{ key: "divan", prefix: "divan", groupCount: 1, groupSize: 3 },
	{ key: "grid", prefix: "grid", groupCount: 1, groupSize: 2 },
	{
		key: "hershey-sub",
		prefix: "hershey-sub",
		ext: "jpg",
		groupCount: 1,
		groupSize: 6,
	},
];

// Create image groups based on definitions
const createImageGroups = ({ prefix, ext = "png", groupCount, groupSize }) => {
	return Array.from({ length: groupCount }, (_, groupIdx) => {
		const start = groupIdx * groupSize + 1;
		return Array.from({ length: groupSize }, (_, i) => ({
			itemImageSrc: `/portfolio/${prefix}/${prefix}-${start + i}.${ext}`,
			thumbnailImageSrc: `/portfolio/${prefix}/${prefix}-${
				start + i
			}.${ext}`,
			alt: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} ${
				start + i
			}`,
			title: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} ${
				start + i
			}`,
		}));
	});
};

// All image groups
const allImageGroups = Object.fromEntries(
	groupDefs.map((def) => [def.key, createImageGroups(def)])
);

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
			return allImageGroups["medicana"][activeImageGroup];
		} else if (activeCompany === "jaliri") {
			return allImageGroups["jaliri"][activeImageGroup];
		} else if (activeCompany === "koc") {
			return allImageGroups["koc"][activeImageGroup];
		} else if (activeCompany === "mastercard") {
			return allImageGroups["mastercard"][activeImageGroup];
		} else if (activeCompany === "divan") {
			return allImageGroups["divan"][activeImageGroup];
		} else if (activeCompany === "hershey-sub") {
			return allImageGroups["hershey-sub"][activeImageGroup];
		} else if (activeCompany === "grid") {
			return allImageGroups["grid"][activeImageGroup];
		}
		return [];
	};

	return (
		<main className="bg-main-yellow min-h-screen">
			<section className="container mx-auto py-10">
				<h1 className="text-4xl mb-8">My Portfolio</h1>
				{/* Images Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{allImageGroups["medicana"].map((group, idx) => (
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
					{allImageGroups["jaliri"].map((group, idx) => (
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
					{allImageGroups["koc"].map((group, idx) => (
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
					{allImageGroups["mastercard"].map((group, idx) => (
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

					{allImageGroups["divan"].map((group, idx) => (
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
					{allImageGroups["hershey-sub"].map((group, idx) => (
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
					{allImageGroups["grid"].map((group, idx) => (
						<button
							key={`grid-${idx}`}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveCompany("grid");
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
