import { useRef, useState } from "react";
import { renderMessages } from "../utils/renderMessages";
import Button from "./Button";
import { useNamesContext } from "../hooks/useNamesContext";

const Message = () => {
	const [copiedPopup, setCopiedPopup] = useState(false);
	const pRef = useRef<HTMLParagraphElement>(null);
	const timeoutRef = useRef<number | null>(null);
	const { names } = useNamesContext();

	const handleCopyMessage = () => {
		navigator.clipboard.writeText(pRef.current!.innerText);

		setCopiedPopup(true);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			setCopiedPopup(false);
			timeoutRef.current = null;
		}, 1500);
	};

	return (
		<div className="bg-message-bg p-7 max-w rounded-2xl">
			<p
				ref={pRef}
				className="text-white font-bold cursor-text mb-6 px-4 max-h-60 max-w-lg overflow-y-auto whitespace-pre-wrap"
			>
				{renderMessages(names)}
			</p>
			<Button onClick={handleCopyMessage} className="bg-btn">
				نسخ الرساله
			</Button>
			<div
				style={{
					transform: copiedPopup
						? "translateX(-24px)"
						: "translateX(100%)",
				}}
				className={`fixed top-4 right-0 btn cursor-default bg-btn text-nowrap`}
			>
				تم نسخ الرساله
			</div>
		</div>
	);
};

export default Message;
