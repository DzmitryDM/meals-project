import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllCategories, getFilterByCategory } from '../api'
import CategoriesList from '../components/categogies/CategoriesList'
import Preloader from '../components/general-components/Preloader'
import './Home.css'

function Home() {

   const [catalogmeal,setCatalogmeal]=useState([])

useEffect(()=>{
getAllCategories().then(data=>{
setCatalogmeal(data.categories)
})
},[])


  return (
    <div className='homePage'>
    {!catalogmeal.length?<Preloader/>:<CategoriesList catalogmeal={catalogmeal}/>}
    </div>
  )
}

export default Home
