import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	className: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
	return (
		<button className={`btn ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
