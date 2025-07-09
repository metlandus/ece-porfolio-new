"use client"
import NextImage from "next/image";

export default function ContactMe() {
	return (
		<section id="contactme" className="bg-main-text">
			<div className="container mx-auto">
				<h2 className="text-white text-3xl py-10 font-medium">
					Do you want to contact me?
				</h2>
				<div className="px-10 flex flex-col gap-10 pb-8">
					<div className="flex gap-4 items-between items-center">
						<h3 className="text-main-yellow text-xl">
							You can download my CV from{" "}
						</h3>
						<a
							href="/ECE_SAYDUT_DESIGNER_CV.pdf"
							download
							aria-label="Download my CV"
							className="bg-main-yellow text-main-text font-semibold py-2 px-5 rounded-full shadow-md hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-main-yellow/40 text-xl group inline-flex items-center"
						>
							<span className="block group-hover:py-2.5 transition-all duration-300">
								Here
							</span>
							<span className="w-0 overflow-hidden group-hover:w-7 transition-all duration-300 flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={3}
									stroke="currentColor"
									className="w-6 h-6 ml-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"
									/>
								</svg>
							</span>
						</a>
					</div>
					<div>
						<h3 className="text-white text-xl">
							And you can reach me out from my socials.
						</h3>

						<div className="flex gap-4 mt-4">
							<a
								href="https://www.behance.net/ecesaydut"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Behance"
								className="hover:scale-120 transition-all duration-250"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="48"
									height="48"
									viewBox="0 0 48 48"
								>
									<path
										fill="#2196F3"
										d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"
									></path>
									<path
										fill="#FFF"
										d="M27 17H34V19H27zM21.512 23.428c.585-.285 1.903-.934 1.903-2.857 0-3.617-3.952-3.57-4.683-3.57H12v14h7.025C19.61 31 24 30.835 24 26.999 24 24.524 22.39 23.714 21.512 23.428zM15 19.428h2.928c.292 0 2.195.104 2.195 1.572 0 1.467-1.463 1.714-1.902 1.714H15V19.428zM18.336 28.571h-3.367v-3.856h3.367c.731 0 2.341.237 2.341 2C20.677 28.476 18.628 28.571 18.336 28.571zM32.438 28.395c-.465.289-.929.436-1.549.436-2.326 0-2.789-1.961-2.789-2.83H36c0-.869 0-1.511-.155-2.236C35.689 23.04 34.63 20 30.734 20 25.289 20 25 24.778 25 25.5c0 .723.156 1.593.467 2.171.309.724.619 1.304 1.084 1.736.464.435 1.083.866 1.703 1.157C29.028 30.855 29.803 31 30.578 31c1.238 0 2.324-.288 3.253-.868.931-.579 1.55-1.448 2.014-2.606h-2.633C33.057 27.816 32.902 28.104 32.438 28.395zM30.734 22.027c1.518 0 2.168 1.592 2.322 2.314H28.1C28.1 24.198 28.471 22.027 30.734 22.027z"
									></path>
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/ece-saydut-4a05a71b8/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="hover:scale-120 transition-all duration-250"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="48"
									height="48"
									viewBox="0 0 48 48"
								>
									<path
										fill="#0078d4"
										d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
									></path>
									<path
										d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
										opacity=".05"
									></path>
									<path
										d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
										opacity=".07"
									></path>
									<path
										fill="#fff"
										d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
									></path>
								</svg>
							</a>
							<a
								href="mailto:ecesaydut@gmail.com"
								aria-label="Email"
								className="hover:scale-120 transition-all duration-250"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="48"
									height="48"
									viewBox="0 0 48 48"
								>
									<linearGradient
										id="NvW_RwTAona1rlOp72mkqa_7rhqrO588QcU_gr1"
										x1="24"
										x2="24"
										y1="42"
										y2="6.207"
										gradientUnits="userSpaceOnUse"
									>
										<stop
											offset="0"
											stopColor="#1ac8fc"
										></stop>
										<stop
											offset=".258"
											stopColor="#1bb6fa"
										></stop>
										<stop
											offset=".775"
											stopColor="#1c86f5"
										></stop>
										<stop
											offset="1"
											stopColor="#1d70f2"
										></stop>
									</linearGradient>
									<path
										fill="url(#NvW_RwTAona1rlOp72mkqa_7rhqrO588QcU_gr1)"
										d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"
									></path>
									<path
										d="M34,16c0.178,0,0.347,0.031,0.512,0.074l-7.824,7.825C25.946,24.64,24.973,25.01,24,25.01 s-1.946-0.37-2.688-1.111l-7.824-7.825C13.653,16.031,13.822,16,14,16H34 M35.926,17.488C35.969,17.653,36,17.822,36,18v12 c0,0.178-0.031,0.347-0.074,0.512L29.414,24L35.926,17.488 M12.074,17.488L18.586,24l-6.511,6.511C12.031,30.347,12,30.178,12,30 V18C12,17.822,12.031,17.653,12.074,17.488 M27.99,25.404l6.522,6.522C34.347,31.969,34.178,32,34,32H14 c-0.178,0-0.347-0.031-0.512-0.074l6.522-6.522c1.117,1.063,2.55,1.605,3.99,1.605S26.873,26.467,27.99,25.404 M34,15H14 c-0.244,0-0.495,0.035-0.768,0.108c-0.346,0.092-0.616,0.361-0.709,0.707c-0.092,0.341,0.003,0.704,0.248,0.956 c-0.189-0.183-0.44-0.283-0.697-0.283c-0.087,0-0.174,0.011-0.26,0.034c-0.345,0.093-0.615,0.363-0.707,0.709 C11.035,17.505,11,17.756,11,18v12c0,0.244,0.035,0.495,0.108,0.768c0.092,0.346,0.361,0.616,0.707,0.709 c0.086,0.023,0.173,0.034,0.26,0.034c0.257,0,0.508-0.099,0.696-0.282c-0.245,0.253-0.34,0.616-0.248,0.956 c0.093,0.345,0.363,0.615,0.709,0.707C13.505,32.965,13.756,33,14,33h20c0.244,0,0.495-0.035,0.768-0.108 c0.346-0.092,0.616-0.361,0.709-0.707c0.092-0.341-0.003-0.704-0.248-0.956c0.189,0.183,0.44,0.282,0.696,0.282 c0.087,0,0.174-0.011,0.26-0.034c0.345-0.093,0.615-0.363,0.707-0.709C36.965,30.495,37,30.244,37,30V18 c0-0.244-0.035-0.495-0.108-0.768c-0.092-0.346-0.361-0.616-0.707-0.709c-0.086-0.023-0.173-0.034-0.26-0.034 c-0.257,0-0.508,0.099-0.697,0.282c0.245-0.253,0.34-0.616,0.248-0.956c-0.093-0.345-0.363-0.615-0.709-0.707 C34.495,15.035,34.244,15,34,15L34,15z"
										opacity=".05"
									></path>
									<path
										d="M34,15.5H14c-0.203,0-0.406,0.029-0.64,0.091c-0.173,0.046-0.308,0.181-0.354,0.353 c-0.046,0.173,0.003,0.357,0.129,0.483l7.824,7.825C21.77,25.063,22.85,25.51,24,25.51s2.23-0.447,3.041-1.257l7.824-7.825 c0.126-0.126,0.176-0.311,0.129-0.483c-0.046-0.173-0.182-0.307-0.354-0.353C34.406,15.529,34.203,15.5,34,15.5L34,15.5z M35.926,16.988c-0.131,0-0.259,0.051-0.354,0.146l-6.511,6.512c-0.195,0.195-0.195,0.512,0,0.707l6.511,6.511 c0.095,0.095,0.223,0.146,0.354,0.146c0.043,0,0.087-0.006,0.13-0.017c0.173-0.046,0.307-0.182,0.353-0.354 C36.471,30.406,36.5,30.203,36.5,30V18c0-0.203-0.029-0.406-0.091-0.64c-0.046-0.173-0.181-0.308-0.353-0.354 C36.013,16.994,35.969,16.988,35.926,16.988L35.926,16.988z M12.074,16.988c-0.043,0-0.087,0.006-0.13,0.017 c-0.173,0.046-0.307,0.182-0.353,0.354C11.529,17.594,11.5,17.797,11.5,18v12c0,0.203,0.029,0.406,0.091,0.64 c0.046,0.173,0.181,0.308,0.353,0.354c0.043,0.012,0.087,0.017,0.13,0.017c0.131,0,0.259-0.051,0.354-0.146l6.511-6.511 c0.195-0.195,0.195-0.512,0-0.707l-6.511-6.512C12.333,17.04,12.205,16.988,12.074,16.988L12.074,16.988z M27.99,24.904 c-0.124,0-0.248,0.046-0.345,0.138c-0.995,0.946-2.289,1.467-3.645,1.467s-2.651-0.521-3.645-1.467 c-0.097-0.092-0.221-0.138-0.345-0.138c-0.128,0-0.256,0.049-0.354,0.146l-6.522,6.522c-0.126,0.126-0.176,0.311-0.129,0.483 s0.182,0.307,0.354,0.353C13.594,32.471,13.797,32.5,14,32.5h20c0.203,0,0.406-0.029,0.64-0.091 c0.173-0.046,0.308-0.181,0.354-0.353s-0.003-0.357-0.129-0.483l-6.522-6.522C28.246,24.953,28.118,24.904,27.99,24.904 L27.99,24.904z"
										opacity=".07"
									></path>
									<path
										fill="#f9f9f9"
										d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M12.074,17.488 C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512L18.586,24L12.074,17.488z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z"
									></path>
								</svg>
							</a>
							<button
								className="hover:scale-120 transition-all duration-250"
								onClick={() => {
									window.alert(
										"Well you are already here!😊"
									);
								}}
							>
								<NextImage
									width="36"
									height="36"
									src="data:image/png;base64,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"
									alt="domain"
									className="rounded-md cursor-pointer"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
