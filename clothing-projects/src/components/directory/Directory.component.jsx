import React from 'react'
import CategoryItem from '../category-item/Category-item-components';
import './directory.style.scss'
const Directory = ({categoriesDir}) => {
  return (
    <div className="directory-container">  
      {/* Include each category */}
      {categoriesDir.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory;