import { ActionDispatch } from "react";
import {
	NamesReducerActions,
	NamesReducerState,
} from "../types/namesReducerTypes";
import NameElement from "./NameElement";

interface NamesListProps {
	names: NamesReducerState;
	dispatch: ActionDispatch<[NamesReducerActions]>;
}

const NamesList = ({ names, dispatch }: NamesListProps) => {
	const handelDeleteAll = () => {
		dispatch({ type: "DELETE ALL" });
	};

	return (
		<div className="flex flex-col items-center bg-names-list p-3.5 rounded-2xl">
			<h1 className="text-center font-bold text-2xl mb-4">
				قائمه الاسماء
			</h1>
			<ul className="my-4 space-y-2">
				{names.map((name, i) => (
					<NameElement name={name} key={i} dispatch={dispatch} />
				))}
			</ul>
			<button
				className="btn bg-delete-btn hover:bg-darker-delete-btn"
				onClick={handelDeleteAll}
			>
				مسح الكل
			</button>
		</div>
	);
};

export default NamesList;
