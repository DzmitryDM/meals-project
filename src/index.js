import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

const router = createBrowserRouter([
	{
		basename: "/",
		element: <App />,
		errorElement: <div>Not Found</div>,
		children: [
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
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
