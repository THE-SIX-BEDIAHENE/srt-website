import React from 'react';
import { CareerHero } from './career/CareerHero';
import { OpportunitySection } from './career/OpportunitySection';
import { jobs } from '../components/data/jobs';
import { CompanyCulture } from './career/CompanyCulture';
import { EmployeeTestimonials } from './career/Team';

const CareersPage = () => {
  const internships = jobs.filter(job => job.type === 'internship');
  const apprenticeships = jobs.filter(job => job.type === 'apprenticeship');
  const fullTime = jobs.filter(job => job.type === 'full-time');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <CareerHero />

        <div className="container mx-auto px-4 py-12 space-y-16">
          <OpportunitySection
            id="internships"
            title="Internship Opportunities"
            description="Launch your career with real-world experience in a dynamic, supportive environment. Our internships provide meaningful projects and mentorship to help you grow."
            jobs={internships}
          />

          <OpportunitySection
            id="apprenticeships"
            title="Apprenticeship Opportunities"
            description="Develop your skills through our structured apprenticeship programs. Gain hands-on experience while receiving guidance from industry experts."
            jobs={apprenticeships}
          />

          <OpportunitySection
            id="full-time"
            title="Full-time Employment"
            description="Join our team and build your career with us. We offer competitive benefits, professional development opportunities, and meaningful work."
            jobs={fullTime}
          />

          <CompanyCulture  />


          <EmployeeTestimonials />

        </div>
      </main>
    </div>
  );
};

export default CareersPage;
