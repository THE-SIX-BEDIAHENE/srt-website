import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from 'lucide-react';
import { Button } from '../../components/UI/Button';

export const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
        expanded ? 'shadow-md' : ''
      }`}
    >
      <div 
        className="p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-blue-800 mb-2 group-hover:text-blue-900">
            {job.title}
          </h3>
          <div className="space-y-1">
            <div className="flex items-center text-gray-600">
              <Briefcase size={16} className="mr-2" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2" />
              <span>{job.schedule}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span 
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              job.type === 'internship' 
                ? 'bg-green-100 text-green-800' 
                : job.type === 'apprenticeship'
                ? 'bg-purple-100 text-purple-800'
                : 'bg-blue-100 text-blue-800'
            }`}
          >
            {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
          </span>
          
          <button
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label={expanded ? "Collapse job details" : "Expand job details"}
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      
      {expanded && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-fade-down">
          <div className="prose max-w-none mb-6">
            <h4 className="text-lg font-medium text-gray-900 mb-2">Job Description</h4>
            <p className="text-gray-700 mb-4">{job.description}</p>
            
            <h4 className="text-lg font-medium text-gray-900 mb-2">Qualifications</h4>
            <ul className="list-disc pl-5 text-gray-700">
              {job.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => window.open(`/apply/${job.id}`, '_blank')} variant="primary">
              Apply Now
            </Button>
            <Button onClick={() => window.open(`/job/${job.id}`, '_blank')} variant="secondary">
              View Details
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};