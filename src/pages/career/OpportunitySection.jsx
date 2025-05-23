import React, { useState } from 'react';
import { JobCard } from './JobCard';
import { Filter, Search } from 'lucide-react';

export const OpportunitySection = ({ id, title, description, jobs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  
  const locations = [...new Set(jobs.map(job => job.location))];
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter ? job.location === locationFilter : true;
    
    return matchesSearch && matchesLocation;
  });

  return (
    <section id={id} className="scroll-mt-20">
      <div className="fade-in-section">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">{description}</p>
        
        {jobs.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No positions found matching your criteria.</p>
              </div>
            )}
          </div>
        )}
        
        {jobs.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg mb-8">
            <p className="text-gray-600">No current openings in this category. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};