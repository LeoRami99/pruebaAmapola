import "./App.css";
import Modal from "./components/Modal";
import { ConsultForm, RegisterForm } from "./components/Forms";
import useDataClient from "./store/useDataClient";
import { useEffect } from "react";

function App() {
	const { setIsClient, isClient } = useDataClient();
	useEffect(() => {
		setIsClient(true);
	}, [setIsClient]);

	return (
		<>
			<main className="flex justify-center items-center flex-col">
				<Modal isOpen={true}>{isClient ? <ConsultForm /> : <RegisterForm />}</Modal>
			</main>
		</>
	);
}

export default App;
