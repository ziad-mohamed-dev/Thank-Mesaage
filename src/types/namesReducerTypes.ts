import { Dispatch } from "react";

export type NamesReducerActions =
	| { type: "ADD" | "DELETE_ONE"; name: string }
	| { type: "DELETE_ALL" };

export type NamesReducerState = (never | string)[];

export interface NamesReducerShape {
	names: NamesReducerState;
	dispatch: Dispatch<NamesReducerActions>;
}
