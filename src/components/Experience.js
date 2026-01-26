import { FiExternalLink } from "react-icons/fi";
function Experience({ title, workDate, link, company, para }) {
	return (
		<>
			<div className="flex flex-col gap-10 p-10 border-b-1 border-amber-50/10">
				<div className="flex items-center justify-between ">
					<div className="flex flex-col gap-2">
						<h3 className="text-main-yellow text-3xl font-light">
							{title}
						</h3>

						<a
							href={link}
							target="_blank"
							className="flex gap-1 text-lg items-center text-white hover:underline underline-offset-4 hover:font-medium"
						>
							<FiExternalLink className="p-1 text-2xl items-center" />
							<p>{company}</p>
						</a>
					</div>
					<p className="text-main-yellow font-normal">{workDate}</p>
				</div>
				<div>
					<p className="text-white font-light">{para}</p>
				</div>
			</div>
		</>
	);
}

export default Experience;
