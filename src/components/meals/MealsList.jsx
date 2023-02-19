import React from 'react'
import MealsItem from './MealsItem'
import './Meals.css'

function MealsList({meals=[]}) {
  return (
    <div className='mealsList'>
     {meals.map(item=><MealsItem key={item.idMeal} {...item}/>)}
    </div>
  )
}

export default MealsList
