import { ActionDispatch, useRef } from "react";
import { NamesReducerActions } from "../types/namesReducerTypes";

interface AddNameFormProps {
	dispatch: ActionDispatch<[NamesReducerActions]>;
}

const AddNameForm = ({ dispatch }: AddNameFormProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handelAddUser = () => {
		if (inputRef.current!.value.trim()) {
			dispatch({ type: "ADD", name: inputRef.current!.value });
		}
		inputRef.current!.value = "";
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="font-bold text-3xl mb-4 text-center">
				أضف اسمًا لرسالة الشكر
			</h1>
			<input
				type="text"
				placeholder="أدخل الأسم"
				className="bg-white my-4 w-[75%] border-2 border-input-border outline-none rounded-lg p-2.5 text-center placeholder:text-[#898684]"
				ref={inputRef}
			/>
			<button
				className="bg-btn hover:bg-darker-btn btn"
				onClick={handelAddUser}
			>
				أضافة
			</button>
		</div>
	);
};

export default AddNameForm;
