export type NamesReducerActions =
	| { type: "ADD" | "DELETE ONE"; name: string }
	| { type: "DELETE ALL" };

export type NamesReducerState = (never | string)[];
