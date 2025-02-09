import { useRef, useState } from "react";
import { NamesReducerState } from "../types/namesReducerTypes";
import { renderMessages } from "../utils/renderMessages";

interface MessageProps {
	names: NamesReducerState;
}

const Message = ({ names }: MessageProps) => {
	const [copiedPopup, setCopiedPopup] = useState(false);
	const pRef = useRef<HTMLParagraphElement>(null);
	const timeoutRef = useRef<number | null>(null);

	const handelCopyMessage = () => {
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
			<button
				onClick={handelCopyMessage}
				className="btn bg-btn hover:bg-darker-btn"
			>
				نسخ الرساله
			</button>
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
