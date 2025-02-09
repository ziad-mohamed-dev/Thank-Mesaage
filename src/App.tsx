import AddNameForm from "./components/AddNameForm";
import Message from "./components/Message";
import NamesList from "./components/NamesList";
import { useNamesContext } from "./hooks/useNamesContext";

const App = () => {
	const stateReducer = useNamesContext();
	const { names } = stateReducer;

	return (
		<main
			className="bg-primary-bg min-h-dvh p-6 flex flex-col gap-10 items-center"
			dir="rtl"
		>
			<AddNameForm />
			{names.length !== 0 && (
				<>
					<NamesList />
					<Message />
				</>
			)}
		</main>
	);
};

export default App;
