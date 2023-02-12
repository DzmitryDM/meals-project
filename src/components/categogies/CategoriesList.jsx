import React from 'react'
import CategoriesItem from './CategoriesItem'

function CategoriesList({catalogmeal}) {
  return (
    <div className='goodsList'>
      {catalogmeal.map(el=><CategoriesItem key={el.idCategory} {...el}/>)}
    </div>
  )
}

export default CategoriesList
