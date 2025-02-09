import {
	NamesReducerActions,
	NamesReducerState,
} from "../types/namesReducerTypes";

export const namesReducer = (
	state: NamesReducerState,
	action: NamesReducerActions
) => {
	let newNames: NamesReducerState;
	switch (action.type) {
		case "ADD":
			newNames = [...state, action.name];
			break;
		case "DELETE ONE":
			newNames = state.filter((stateName) => stateName !== action.name);
			break;
		case "DELETE ALL":
			newNames = [];
			break;
		default:
			newNames = state;
			break;
	}
	const newNamesStringified = JSON.stringify(newNames);
	localStorage.setItem("names", newNamesStringified);
	return newNames;
};
