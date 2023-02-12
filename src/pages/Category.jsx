import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilterByCategory } from '../api'
import Preloader from '../components/general-components/Preloader'
import MealsList from '../components/meals/MealsList'
import './Home.css'


function Category() {

   const[meals,setMeals]=useState([])
const {name}=useParams()

useEffect(()=>{
getFilterByCategory(name).then(data=>{
setMeals(data.meals)
})
},[name])

  return (
    <div>
      <MealsList meals={meals}/>
    </div>
  )
}

export default Category
