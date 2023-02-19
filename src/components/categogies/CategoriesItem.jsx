import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

function CategoriesItem({strCategory,strCategoryThumb,strCategoryDescription}) {
  return (
   <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory}/>
          <span className="card-title">{strCategory}</span>
        </div>
        <div className="card-content">
        <span className="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0,100)}...</p>
        </div>
        <div className='card-action'>
<Link to={`category/${strCategory}`} className='btn btnCategories'>Watch dish</Link>
        </div>
      </div>
  )
}

export default CategoriesItem
