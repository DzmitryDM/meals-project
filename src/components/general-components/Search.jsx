import React, { useState } from 'react'
import './general-components.css'

function Search({handleSearch=Function.prototype}) {
   const [value,SetValue]=useState([])

const handleKey=(e)=>{
if(e.key === 'Enter'){
handleSubmit()
}
}

const handleSubmit=()=>{
handleSearch(value)
}



  return (
 <div className='row'>
   <div className='input-field col s12 '>
      <input className='search '
      placeholder='Search'
      onKeyDown={handleKey}
      value={value}
      onChange={(e)=>SetValue(e.target.value)}
       />
   <button className='btn btnClick' onClick={handleSubmit}>Search</button>
   </div>
 </div>
  )
}

export default Search
