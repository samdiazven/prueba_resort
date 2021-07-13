import React from "react";
import { useHistory } from "react-router-dom";
export default function ItemUser({ user, id }) {
	const { name, lastname, address, gender } = user;
	const history = useHistory();
	const handleClick = async () => {
		await localStorage.setItem("name", name);
		history.push("list-vouchers");
	};
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{lastname}</td>
			<td>{address}</td>
			<td>{gender}</td>
			<td>
				<button className="btn btn-outline-info" onClick={handleClick}>
					{" "}
					VER{" "}
				</button>
			</td>
		</tr>
	);
}
