import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import ListVouchers from "./ListVouchers";
export default function Routes() {
	return (
		<div className="container">
			<BrowserRouter>
				<Switch>
					<Route exact path="/list-vouchers" component={ListVouchers} />
					<Route exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
