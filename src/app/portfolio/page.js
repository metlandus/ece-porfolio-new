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

const videoDefs = [
	{ key: "medicana", prefix: "medicana", groupCount: 2, groupSize: 4 },
	{ key: "divan", prefix: "divan", groupCount: 1, groupSize: 3 },
	{ key: "fairy", prefix: "fairy", groupCount: 1, groupSize: 2 },
	{ key: "merco", prefix: "merco", groupCount: 1, groupSize: 2 },
	{ key: "mobile-case", prefix: "mobile-case", groupCount: 1, groupSize: 3 },
	{ key: "paradontax", prefix: "paradontax", groupCount: 1, groupSize: 2 },
	{ key: "pegasus", prefix: "pegasus", groupCount: 2, groupSize: 6 },
	{ key: "penti", prefix: "penti", groupCount: 1, groupSize: 4 },
];

const miscPhotos = [
	"Merco",
	"Paradontax",
	"BookCover",
	"Infographic",
	"Pictogram",
	"Surrealism",
	"Typographic",
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

// Create video groups based on definitions
const createVideoGroups = ({ prefix, groupCount, groupSize, ext = "mp4" }) => {
	return Array.from({ length: groupCount }, (_, groupIdx) => {
		const start = groupIdx * groupSize + 1;
		return Array.from({ length: groupSize }, (_, i) => ({
			videoSrc: `/portfolio/videos/${prefix}-V-${start + i}.${ext}`,
			alt: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} Video ${
				start + i
			}`,
			title: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} Video ${
				start + i
			}`,
		}));
	});
};

// All video groups
const allVideoGroups = Object.fromEntries(
	videoDefs.map((def) => [def.key, createVideoGroups(def)])
);

// Flatten all video groups into a single array of groups
const allVideoGroupsFlat = Object.values(allVideoGroups).flat();

// Add singular (misc) videos
const miscVideos = ["Exathlon", "Case1", "Case2", "Hershey"];

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
		if (activeCompany !== undefined) {
			return allImageGroups[activeCompany][activeImageGroup];
		}
		return [];
	};

	return (
		<main className="bg-main-yellow min-h-screen">
			<section className="container mx-auto py-10">
				<h1 className="text-center text-5xl font-medium mb-18 text-main-text">
					My Portfolio
				</h1>
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
								imageClassName="w-full h-full object-cover"
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
								imageClassName="w-full h-full object-cover"
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
								imageClassName="w-full h-full object-cover"
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
								imageClassName="w-full h-full object-cover"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>
						</button>
					))}
					{miscPhotos.map((photo) => (
						<div
							key={photo}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
						>
							<Image
								src={`/portfolio/misc/${photo}-1.jpg`}
								alt={`${photo}-1`}
								preview
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
								imageClassName="w-full h-full object-cover"
							/>
						</div>
					))}
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
				<h2 className="text-3xl mt-16 mb-8 text-main-text">Videos</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{allVideoGroupsFlat.map((group, idx) => (
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
					{miscVideos.map((videoName, idx) => (
						<button
							key={`misc-${videoName}-${idx}`}
							className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
							onClick={() => {
								setActiveVideoGroup(
									allVideoGroupsFlat.length + idx
								);
								setTimeout(() => {
									videoGalleriaRef.current?.show();
								}, 0);
							}}
						>
							{videoName === "Hershey" ? (
								<NextImage
									src={"/portfolio/videos/Hershey-thumb.png"}
									alt="Hershey Video Thumbnail"
									width={1200}
									height={1200}
									quality={100}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										background: "#000",
									}}
								/>
							) : (
								<video
									src={`/portfolio/videos/${videoName}-V-1.mp4`}
									muted
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										background: "#000",
									}}
								/>
							)}
						</button>
					))}
				</div>
				{/* Videos Galleria */}
				<Galleria
					ref={videoGalleriaRef}
					value={
						activeVideoGroup < allVideoGroupsFlat.length
							? allVideoGroupsFlat[activeVideoGroup]
							: [
									{
										videoSrc: `/portfolio/videos/${
											miscVideos[
												activeVideoGroup -
													allVideoGroupsFlat.length
											]
										}-V-1.mp4`,
										alt: miscVideos[
											activeVideoGroup -
												allVideoGroupsFlat.length
										],
										title: miscVideos[
											activeVideoGroup -
												allVideoGroupsFlat.length
										],
									},
							]
					}
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
								height: "80vh",
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
					style={{ width: 700 }}
					thumbnailsPosition="bottom"
					showIndicators={false}
					showIndicatorsOnItem={false}
				/>
			</section>
		</main>
	);
}
