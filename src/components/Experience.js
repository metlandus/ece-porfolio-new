function Experience({ title, workDate, link, company }) {
	return (
		<>
			<div className="flex items-center justify-between gap-10 p-10 border-b-1 border-amber-50/10">
				<div className="flex flex-col">
					<h3 className="text-main-yellow text-3xl font-light">
						{title}
					</h3>
					<p className="text-white font-light">{workDate}</p>
				</div>
				<a
					href={link}
					target="_blank"
					className="text-main-yellow hover:underline under underline-offset-4 hover:text-main-yellow/80"
				>
					{company}
				</a>
			</div>
		</>
	);
}

export default Experience;
