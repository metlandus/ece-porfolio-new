import React, { useEffect, useRef, useState } from "react";

const TypewriterComponent = ({
	strings = [],
	loop = false,
	cursor = "|",
	delay = 100,
	deleteSpeed = 50,
	autoStart = true,
	pauseAfterTyping = 1000, // <- NEW
	pauseAfterDeleting = 500, // <- NEW
}) => {
	const [text, setText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopIndex, setLoopIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [pause, setPause] = useState(false);

	const timeoutRef = useRef(null);

	useEffect(() => {
		if (!autoStart || strings.length === 0 || pause) return;

		const currentString = strings[loopIndex % strings.length];

		const handleTyping = () => {
			const updatedText = isDeleting
				? currentString.substring(0, charIndex - 1)
				: currentString.substring(0, charIndex + 1);

			setText(updatedText);
			setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

			let nextDelay = isDeleting ? deleteSpeed : delay;

			// If done typing full string
			if (!isDeleting && updatedText === currentString) {
				setPause(true);
				setTimeout(() => {
					setIsDeleting(true);
					setPause(false);
				}, pauseAfterTyping);
				return;
			}

			// If done deleting string
			if (isDeleting && updatedText === "") {
				setPause(true);
				setTimeout(() => {
					setIsDeleting(false);
					setLoopIndex((prev) => prev + 1);
					setCharIndex(0);
					setPause(false);
				}, pauseAfterDeleting);
				return;
			}

			timeoutRef.current = setTimeout(handleTyping, nextDelay);
		};

		timeoutRef.current = setTimeout(handleTyping, delay);

		return () => clearTimeout(timeoutRef.current);
	}, [
		charIndex,
		isDeleting,
		loopIndex,
		autoStart,
		strings,
		delay,
		deleteSpeed,
		pause,
		pauseAfterTyping,
		pauseAfterDeleting,
	]);

	return (
		<span>
			{text}
			<span>{cursor}</span>
		</span>
	);
};

export default TypewriterComponent;
