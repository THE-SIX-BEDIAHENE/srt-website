import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center mb-3 text-gray-500 text-xs">
          <Clock size={14} className="mr-1" />
          <span>{post.readingTime} min read</span>
          <span className="mx-2">•</span>
          <span>{post.publishDate}</span>
        </div>
        
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 mb-2 group-hover:text-blue-800 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full object-cover mr-2"
            />
            <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
          </div>
          
          <a 
            href={`/blog/${post.slug}`}
            className="text-blue-800 text-sm font-medium inline-flex items-center group"
          >
            Read more
            <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;