import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAllCategories } from "../api";
import CategoriesList from "../components/categogies/CategoriesList";
import Preloader from "../components/general-components/Preloader";
import Search from "../components/general-components/Search";

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [catalogFiltered, setCatalogFiltered] = useState([]);

	const { pathname, search } = useLocation();

	const navigate = useNavigate();

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.categories);
			setCatalogFiltered(
				search
					? data.categories.filter((item) =>
							item.strCategory
								.toLowerCase()
								.includes(search.split("=")[1].toLowerCase())
					  )
					: data.categories
			);
		});
	}, [search]);

	const handleSearch = (str) => {
		setCatalogFiltered(
			catalogFiltered.filter((item) =>
				item.strCategory.toLowerCase().includes(str)
			)
		);
		navigate({
			pathname,
			search: `?search=${str}`,
		});
	};

	return (
		<div className="pageHome">
			<Search handleSearch={handleSearch} />
			{!catalog.length ? (
				<Preloader />
			) : (
				<CategoriesList catalog={catalogFiltered} />
			)}
		</div>
	);
}

export default Home;
