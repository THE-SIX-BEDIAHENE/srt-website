import React from 'react';
import { Tag } from 'lucide-react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Tag size={18} className="mr-2 text-blue-800" />
        <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-blue-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
          }`}
          onClick={() => onCategoryChange('all')}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-blue-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;