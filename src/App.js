import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
	const routers =[
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/category/:name",
			element: <Category />,
		},
		{
			path: "/meal/:id",
			element: <Recipe />,
		},
	]

   const router =createBrowserRouter(routers,{
   basename:"/meals-project"
   })

	return (
		<div className="app">
			<Header />
			<section className="content">
				<RouterProvider router={router} />
			</section>
			<Footer />
		</div>
	);
}

export default App;
