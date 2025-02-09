import { useReducer } from "react";
import AddNameForm from "./components/AddNameForm";
import Message from "./components/Message";
import NamesList from "./components/NamesList";
import { namesReducer } from "./reducer/namesReducerFN";
import { NamesReducerState } from "./types/namesReducerTypes";

const initReducerState = (): NamesReducerState => {
	const localStorageNames = localStorage.getItem("names");
	return localStorageNames ? JSON.parse(localStorageNames) : [];
};

const App = () => {
	const [names, dispatch] = useReducer(namesReducer, [], initReducerState);

	return (
		<main
			className="bg-primary-bg min-h-dvh p-6 flex flex-col gap-10 items-center"
			dir="rtl"
		>
			<AddNameForm dispatch={dispatch} />
			{names.length !== 0 && (
				<>
					<NamesList names={names} dispatch={dispatch} />
					<Message names={names} />
				</>
			)}
		</main>
	);
};

export default App;
