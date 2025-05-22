import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-blue-800 rounded-xl p-6 md:p-8 text-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-700 rounded-full opacity-50"></div>
      <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-700 rounded-full opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <Mail size={24} className="mr-2" />
          <h3 className="text-xl font-bold">Stay Updated</h3>
        </div>
        
        <p className="mb-6 opacity-90">
          Get the latest tech insights and solutions delivered straight to your inbox.
        </p>
        
        {isSubmitted ? (
          <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg flex items-center">
            <CheckCircle size={20} className="mr-2 text-green-400" />
            <p>Thanks for subscribing! Check your inbox soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full py-3 pl-4 pr-12 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white p-1.5 rounded-md hover:bg-blue-900 transition-colors disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <ArrowRight size={18} />
              )}
            </button>
          </form>
        )}
        
        <p className="text-xs mt-4 opacity-75">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;