import { FormEvent, useRef, useState } from "react";
import Button from "./Button";
import { useNamesContext } from "../hooks/useNamesContext";

const AddNameForm = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const timeoutRef = useRef<number>(null);
	const [nameExist, setNameExist] = useState(false);
	const { names, dispatch } = useNamesContext();

	const handleAddName = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newName = inputRef.current!.value.trim();

		if (newName && !names.includes(newName)) {
			dispatch({ type: "ADD", name: newName });
		} else if (names.includes(newName)) {
			setNameExist(true);

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				setNameExist(false);
				timeoutRef.current = null;
			}, 1500);
		}
		inputRef.current!.value = "";
	};

	return (
		<form className="flex flex-col items-center" onSubmit={handleAddName}>
			<h1 className="font-bold text-3xl mb-4 text-center">
				أضف اسمًا لرسالة الشكر
			</h1>
			<input
				type="text"
				placeholder="أدخل الأسم"
				className="bg-white my-4 w-[75%] border-2 border-input-border outline-none rounded-lg p-2.5 text-center placeholder:text-[#898684]"
				ref={inputRef}
			/>
			{nameExist && (
				<p className="text-delete-btn -mt-2 p-2">الاسم موجود بالفعل</p>
			)}
			<Button bg="btn">أضافة</Button>
		</form>
	);
};

export default AddNameForm;
