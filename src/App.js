import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="container">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
