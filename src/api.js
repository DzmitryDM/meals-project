import axios from "axios";
import { API_URL } from "./config";

const getMealDetailsById = async (mealId) => {
	const response = await fetch(API_URL + "lookup.php?i=52772" + mealId);
	return await response.json;
};

const getAllCategories = async () => {
	const response = await fetch(API_URL + 'categories.php');
   return await response.json()
};

const getFilterByCategory = async (catName) => {
	const response = await fetch(API_URL + 'filter.php?c=' + catName);
	return await response.json();
};

export { getMealDetailsById, getAllCategories, getFilterByCategory };
