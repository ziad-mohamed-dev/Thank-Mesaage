import { use } from "react";
import { NamesContext } from "../context/NamesContext";

export const useNamesContext = () => {
	const context = use(NamesContext);
	if (!context) {
		throw new Error("useNamesContext must be used within a NamesProvider");
	}
	return context;
};
