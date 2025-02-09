import { useEffect, useReducer } from "react";
import {
	NamesReducerShape,
	NamesReducerState,
} from "../types/namesReducerTypes";
import { namesReducer } from "../reducer/namesReducerFN";

const initReducerState = (): NamesReducerState => {
	const localStorageNames = localStorage.getItem("names");
	return localStorageNames ? JSON.parse(localStorageNames) : [];
};

export const useNames = (): NamesReducerShape => {
	const [names, dispatch] = useReducer(namesReducer, [], initReducerState);
	useEffect(() => {
		const newNamesStringified = JSON.stringify(names);
		localStorage.setItem("names", newNamesStringified);
	}, [names]);

	return { names, dispatch };
};
