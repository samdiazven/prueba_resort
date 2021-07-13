import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export default function ListVouchers() {
	const [data, setData] = useState([]);
	const history = useHistory();
	useEffect(() => {
		fetch(
			"https://servicios.inclubtest.online:2053/api/payment/schedule/vouchers/383"
		)
			.then((res) => res.json())
			.then((x) => setData(x.objModel));
	}, []);
	if (!data) return "loading..";
	const name = localStorage.getItem("name");
	return (
		<div className="container">
			<div className="row">
				<div className="col-10">
					<h1 className="mt-2 ml-4 text-center text-bold">
						Lista de Vouchers de {name}
					</h1>
				</div>
				<div
					className="col-2 text-center mt-4"
					onClick={() => history.push("/")}
				>
					<a className="badge badge-light p-2 cursor-pointer" href="#">
						Regresar
					</a>
				</div>
			</div>
			{data.map((item, idx) => {
				const voucher = item.paymentVouchers[0];
				const dateSplitted = voucher.creationDate.split("T");
				const date = dateSplitted[0];
				return (
					<div className="list-group mt-4" key={idx}>
						<a
							href="#"
							className="list-group-item list-group-item-action active"
						>
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1">{voucher.nameMethodTipoPago}</h5>
								<small>{date}</small>
							</div>
							<p className="mb-1">{voucher.nameMethodSubTipoPago}</p>
							<small>Monto Total: {voucher.totalAmount}</small>
						</a>
					</div>
				);
			})}
		</div>
	);
}
