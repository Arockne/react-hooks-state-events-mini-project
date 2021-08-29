import React from "react";

function CategoryFilter({ categories, currentFilter, onCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(( category, index) => 
        <button 
        key={index} 
        className={currentFilter === category ? 'selected' : ''}
        onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>)}
    </div>
  );
}

export default CategoryFilter;