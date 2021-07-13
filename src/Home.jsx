import React, { useState, useEffect } from "react";
import { STATES } from "./states";
import Table from "./Table";

function Home() {
	const [data, setData] = useState([]);
	const [stateUsers, setStateUsers] = useState(0);
	const [loading, setLoading] = useState(true);
	const serializedData = Object.entries(STATES);
	useEffect(() => {
		async function getUsers() {
			try {
				const res = await fetch(
					`https://servicios.inclubtest.online:2053/api/suscription/all/state/${stateUsers}`
				);
				const resJson = await res.json();
				setData(resJson);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}
		getUsers();
	}, [stateUsers]);

	const onChangeState = (value) => {
		setLoading(true);
		setStateUsers(value);
	};
	console.log(data);
	return (
		<div className="container">
			<h1 className="text-center mt-4 text-bold">Lista de Usuarios</h1>
			<select
				name="state"
				className="form-control"
				placeholder="Seleccione un estado"
				onChange={(e) => onChangeState(e.target.value)}
			>
				{serializedData.map((item, idx) => (
					<option key={idx} value={item[0]}>
						{item[1]}
					</option>
				))}
			</select>
			{loading ? (
				<h4 className="text-center mt-3">Cargandooo</h4>
			) : (
				<Table data={data} />
			)}
		</div>
	);
}

export default Home;
