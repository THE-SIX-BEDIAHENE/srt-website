import React, { useState, useEffect } from 'react';
import FeaturedPost from './blogs/FeaturedPost';
import BlogPostCard from './blogs/BlogPostCard';
import CategoryFilter from './blogs/CategoryFilter';
import NewsletterSignup from './blogs/NewsletterSignup';
import { blogPosts, categories, getFeaturedPost, getRecentPosts } from '../components/data/blogData';

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const featuredPost = getFeaturedPost();
  
  useEffect(() => {
    if (isSearching && searchResults.length > 0) {
      setFilteredPosts(searchResults);
      return;
    }
    
    if (activeCategory === 'all') {
      setFilteredPosts(getRecentPosts(featuredPost.id));
    } else {
      setFilteredPosts(
        blogPosts.filter(post => post.id !== featuredPost.id && post.category === activeCategory)
      );
    }
  }, [activeCategory, featuredPost.id, isSearching, searchResults]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsSearching(false);
  };
  
  const handleSearchResults = (results) => {
    setSearchResults(results);
    setIsSearching(results.length > 0);
  };

  return (
    <div className="min-h-screen bg-white">      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-blue-50 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800  mb-4">
                Latest Insights & Tech Solutions
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                Explore our collection of articles on cutting-edge technology, 
                industry trends, and innovative solutions.
              </p>
            </div>
            
            {/* <div className="max-w-3xl mx-auto">
              <SearchBar allPosts={blogPosts} onSearchResults={handleSearchResults} />
            </div> */}
          </div>
        </section>
        
        {/* Featured Post Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 ">Featured Article</h2>
            </div>
            
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
        
        {/* Blog Posts Grid Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {isSearching 
                      ? `Search Results (${searchResults.length})` 
                      : activeCategory === 'all' 
                        ? 'Recent Articles' 
                        : activeCategory}
                  </h2>
                </div>
                
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-8 text-center">
                    <p className="text-gray-600 mb-4">No articles found matching your criteria.</p>
                    <button 
                      onClick={() => setActiveCategory('all')}
                      className="text-blue-800 font-medium hover:underline"
                    >
                      View all articles
                    </button>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="md:w-1/4">
                <CategoryFilter 
                  categories={categories} 
                  activeCategory={activeCategory} 
                  onCategoryChange={handleCategoryChange} 
                />
                
                <div className="sticky top-24">
                  <NewsletterSignup />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default BlogsPage;