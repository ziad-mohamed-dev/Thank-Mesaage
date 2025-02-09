import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NamesProvider } from "./context/NamesContext.tsx";

createRoot(document.getElementById("root")!).render(
	<NamesProvider>
		<App />
	</NamesProvider>
);
