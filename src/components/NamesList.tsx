import NameElement from "./NameElement";
import Button from "./Button";
import { useNamesContext } from "../hooks/useNamesContext";

const NamesList = () => {
	const { names, dispatch } = useNamesContext();

	const handleDeleteAll = () => {
		dispatch({ type: "DELETE_ALL" });
	};

	return (
		<div className="flex flex-col items-center bg-names-list p-3.5 rounded-2xl">
			<h1 className="text-center font-bold text-2xl mb-4">
				قائمه الاسماء
			</h1>
			<ul className="my-4 space-y-2">
				{names.map((name) => (
					<NameElement name={name} key={name} dispatch={dispatch} />
				))}
			</ul>
			<Button onClick={handleDeleteAll} bg="delete-btn">
				مسح الكل
			</Button>
		</div>
	);
};

export default NamesList;
