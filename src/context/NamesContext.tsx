import { createContext, ReactNode } from "react";
import { useNames } from "../hooks/useNames";
import { NamesReducerShape } from "../types/namesReducerTypes";

export const NamesContext = createContext<NamesReducerShape | undefined>(
	undefined
);

export const NamesProvider = ({ children }: { children: ReactNode }) => {
	const stateReducer = useNames();
	return (
		<NamesContext.Provider value={stateReducer}>
			{children}
		</NamesContext.Provider>
	);
};
