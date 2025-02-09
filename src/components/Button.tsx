import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	bg: string;
}

const Button = ({ children, onClick, bg }: ButtonProps) => {
	return (
		<button
			className={`btn bg-${bg} hover:bg-darker-${bg}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
