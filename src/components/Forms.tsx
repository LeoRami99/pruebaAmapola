import { getDataClient } from "../services/client.service";

import { useState } from "react";

import toast from "react-hot-toast";

import useDataClient from "../store/useDataClient";

export const ConsultForm = () => {
	const { setClient, setIsClient } = useDataClient();

	const [numDocument, setNumDocument] = useState<string>("");

	const handleSubmitConsultDataClient = (e: React.FormEvent) => {
		e.preventDefault();
		if (numDocument === "") toast.error("Ingrese un número de identificación");
		if (numDocument.length < 6) toast.error("El número de identificación debe tener al menos 6 caracteres");

		toast.promise(getDataClient(numDocument), {
			loading: "Cargando...",
			success: (data) => {
				// setIsClient(true);
				console.log(data);
				setClient(data.data);
				return "Datos cargados exitosamente";
			},
			error: () => {
				// setIsClient(false);
				return "Usuario no encontrado";
			},
		});
	};

	return (
		<form className="flex flex-col justify-center items-center space-y-10" onSubmit={handleSubmitConsultDataClient}>
			<div className="size-32">
				<img src="https://png.pngtree.com/png-vector/20240612/ourmid/pngtree-lady-doctor-image-png-image_12725825.png" alt="Doctor Image" className="w-full h-full object-cover" />
			</div>
			<h2 className="text-blue-950 text-2xl font-bold">Atención Médica Virtual Inmediata</h2>
			<input type="number" placeholder="Número de identificación" required className="input input-bordered border-blue-500 text-blue-500 w-72" onChange={(e) => setNumDocument(e.target.value)} value={numDocument} />
			<button type="submit" className="btn bg-yellow-500 text-white w-1/3">
				Ingresar
			</button>
		</form>
	);
};

export const RegisterForm = () => {
	const [dataClient, setDataClient] = useState({
		phone: "",
		names: "",
		lastNames: "",
		email: "",
		numDocument: "",
		check: false,
	});

	const handleSumbitRegiser = (e: React.FormEvent) => {
		e.preventDefault();
		// validate data
		if (dataClient.phone === "") toast.error("Ingrese un número de celular");
		if (dataClient.phone.length < 10) toast.error("El número de celular debe tener al menos 10 caracteres");
		if (dataClient.names === "") toast.error("Ingrese un nombre");
		if (dataClient.lastNames === "") toast.error("Ingrese un apellido");
		if (dataClient.email === "") toast.error("Ingrese un correo");
		if (!dataClient.check) toast.error("Acepte los términos y condiciones");

		const RegexData = {
			onlyLetters: /^[a-zA-Z\s]*$/,
			phoneRegex: /^[0-9]*$/,
			emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		};

		if (!RegexData.phoneRegex.test(dataClient.phone)) toast.error("El número de celular solo debe contener números");
		if (!RegexData.onlyLetters.test(dataClient.names)) toast.error("El nombre solo debe contener letras");
		if (!RegexData.onlyLetters.test(dataClient.lastNames)) toast.error("El apellido solo debe contener letras");
		if (!RegexData.emailRegex.test(dataClient.email)) toast.error("Ingrese un correo válido");

		// send DataBackend
	};

	// const renderLastForm = () => {
	// 	return (
	// 		<>
	// 			<div className="flex flex-col justify-center items-center">
	// 				<h2>Hola {dataClient.names}!</h2>
	// 			</div>
	// 		</>
	// 	);
	// };

	return (
		<form className="flex flex-col justify-center items-center space-y-4" onSubmit={handleSumbitRegiser}>
			<div role="alert" className="alert bg-yellow-300 text-black">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
				</svg>
				<span>Usuario no encontrado, registrese</span>
			</div>
			<h2 className="text-blue-950 text-2xl font-bold">Atención Médica Virtual Inmediata</h2>
			<input type="tel" className="input input-bordered border-blue-500 text-blue-500 w-full" name="phone" placeholder="Celular:" onChange={(e) => setDataClient({ ...dataClient, phone: e.target.value })} value={dataClient.phone} required />
			<input type="text" className="input input-bordered border-blue-500 text-blue-500 w-full" name="names" placeholder="Nombres" onChange={(e) => setDataClient({ ...dataClient, names: e.target.value })} value={dataClient.names} required />
			<input type="text" className="input input-bordered border-blue-500 text-blue-500 w-full" name="lastNames" placeholder="Apellidos" onChange={(e) => setDataClient({ ...dataClient, lastNames: e.target.value })} value={dataClient.lastNames} required />
			<input type="email" className="input input-bordered border-blue-500 text-blue-500 w-full" name="email" placeholder="Correo" onChange={(e) => setDataClient({ ...dataClient, email: e.target.value })} value={dataClient.email} required />
			<div className="flex items-center gap-2">
				<input type="checkbox" name="check" id="check" onChange={(e) => setDataClient({ ...dataClient, check: e.target.checked })} value={dataClient.check} title="Acepto términos y condiciones" />
				<label htmlFor="">Terminos y condiciones</label>
			</div>
			<button type="submit" className="btn bg-yellow-500 text-white w-1/3">
				Conectar
			</button>
		</form>
	);
};
