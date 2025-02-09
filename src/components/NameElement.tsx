import { Dispatch } from "react";
import { FaTrash } from "react-icons/fa";
import { NamesReducerActions } from "../types/namesReducerTypes";

interface NameElementProps {
	name: string;
	dispatch: Dispatch<NamesReducerActions>;
}

const NameElement = ({ name, dispatch }: NameElementProps) => {
	const handleDeleteOne = () => {
		dispatch({ type: "DELETE_ONE", name });
	};

	return (
		<div className="flex justify-between items-center gap-2.5  w-52 bg-name-box rounded-2xl p-2.5">
			<span className="font-medium text-primary-text line-clamp-1">
				{name}
			</span>
			<FaTrash
				className="text-delete-btn hover:text-darker-delete-btn text-lg cursor-pointer transition"
				onClick={handleDeleteOne}
			/>
		</div>
	);
};

export default NameElement;
