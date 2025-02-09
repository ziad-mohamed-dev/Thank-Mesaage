import {
	NamesReducerActions,
	NamesReducerState,
} from "../types/namesReducerTypes";

export const namesReducer = (
	state: NamesReducerState,
	action: NamesReducerActions
) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.name];
		case "DELETE_ONE":
			return state.filter((stateName) => stateName !== action.name);
		case "DELETE_ALL":
			return [];
		default:
			return state;
	}
};
