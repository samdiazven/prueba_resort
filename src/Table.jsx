import React from "react";
import ItemUser from "./ItemUser";
export default function Table({ data }) {
	if (data.objModel.length === 0)
		return <h3 className="text-center mt-4">No hay Datos Para Mostrar</h3>;
	return (
		<table className="table  mt-4">
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Direccion</th>
					<th>Genero</th>
					<th>Ver Reporte</th>
				</tr>
			</thead>

			<tbody>
				{data.objModel.map((item) => {
					return (
						<ItemUser
							key={item.id}
							id={item.idUser}
							user={item.userResponseDto}
						/>
					);
				})}
			</tbody>
		</table>
	);
}
