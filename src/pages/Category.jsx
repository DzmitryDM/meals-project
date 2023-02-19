import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterByCategory } from "../api";
import GoBack from "../components/general-components/GoBack";
import Preloader from "../components/general-components/Preloader";
import MealsList from "../components/meals/MealsList";

function Category() {
	const [meals, setMeals] = useState([]);

	const { name } = useParams();
	useEffect(() => {
		getFilterByCategory(name).then((data) => {
			setMeals(data.meals);
		});
	}, [name]);

	return (
		<>
			<GoBack />
			{!meals.length ? <Preloader /> : <MealsList meals={meals} />}
		</>
	);
}

export default Category;
