import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
	return (
		<div className="app">
			<Header />
			<main className="content">
            <Outlet />
         </main>
			<Footer />
		</div>
	);
}

export default App;
