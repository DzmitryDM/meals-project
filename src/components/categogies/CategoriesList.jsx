import React from 'react'
import CategoriesItem from './CategoriesItem'

function CategoriesList({catalog=[]}) {
  return (
    <div className='categoriesList'>
      {catalog.map(el=><CategoriesItem key={el.idCategory} {...el}/>)}
    </div>
  )
}

export default CategoriesList
