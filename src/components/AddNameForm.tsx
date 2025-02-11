import { useRef, useState } from "react";
import Button from "./Button";
import { useNamesContext } from "../hooks/useNamesContext";

const AddNameForm = () => {
	const timeoutRef = useRef<number>(null);
	const [nameExist, setNameExist] = useState(false);
	const { names, dispatch } = useNamesContext();

	const formAction = (formData: FormData) => {
		const newName = formData.get("name")?.toString().trim();
		if (newName) {
			if (!names.includes(newName)) {
				dispatch({ type: "ADD", name: newName });
			} else {
				setNameExist(true);
				if (timeoutRef.current) {
					clearTimeout(timeoutRef.current);
				}
				timeoutRef.current = setTimeout(() => {
					setNameExist(false);
					timeoutRef.current = null;
				}, 1000);
			}
		}
	};

	return (
		<form action={formAction} className="flex flex-col items-center">
			<h1 className="font-bold text-3xl mb-4 text-center">
				أضف اسمًا لرسالة الشكر
			</h1>
			<input
				type="text"
				placeholder="أدخل الأسم"
				className="bg-white my-4 w-[75%] border-2 border-input-border outline-none rounded-lg p-2.5 text-center placeholder:text-[#898684]"
				name="name"
			/>
			{nameExist && (
				<p className="text-delete-btn -mt-2 p-2">الاسم موجود بالفعل</p>
			)}
			<Button className="bg-btn">أضافة</Button>
		</form>
	);
};

export default AddNameForm;
