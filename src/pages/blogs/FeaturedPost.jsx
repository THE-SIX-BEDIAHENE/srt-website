import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';

const FeaturedPost = ({ post }) => {
  return (
    <div className="relative w-full overflow-hidden bg-white rounded-xl shadow-lg transition-transform duration-300 hover:translate-y-[-4px] group">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="h-full">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {post.category}
              </span>
              <div className="flex items-center ml-3 text-gray-500 text-sm">
                <Clock size={14} className="mr-1" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 mb-3 group-hover:text-blue-800 transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white shadow-sm"
              />
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
            
            <a 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-blue-800 font-medium group-hover:underline"
            >
              Read Full Article
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;