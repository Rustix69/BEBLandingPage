import React from 'react';
import PageHero from '@/components/PageHero';
import CareersApplyForm from '@/components/CareersApplyForm';
import Header from '@/components/Header';

const jobRoles = [
  {
    title: 'Project Manager',
    department: 'Construction Management',
    location: 'Mumbai, India',
    description: 'Responsible for overseeing construction projects from inception to completion.',
    requirements: [
      'Minimum 5 years of construction project management experience',
      'Strong leadership and communication skills',
      'Proficiency in project management software'
    ]
  },
  {
    title: 'Civil Engineer',
    department: 'Engineering',
    location: 'Bangalore, India',
    description: 'Design and supervise infrastructure and construction projects.',
    requirements: [
      'B.Tech/B.E. in Civil Engineering',
      'Minimum 3 years of relevant experience',
      'Strong analytical and problem-solving skills'
    ]
  },
  {
    title: 'Architect',
    department: 'Design',
    location: 'Delhi, India',
    description: 'Create innovative and functional architectural designs.',
    requirements: [
      'Bachelor\'s or Master\'s degree in Architecture',
      'Proficiency in CAD and 3D modeling software',
      'Portfolio of completed projects'
    ]
  },
  {
    title: 'Site Supervisor',
    department: 'Construction',
    location: 'Hyderabad, India',
    description: 'Manage day-to-day operations at construction sites.',
    requirements: [
      'Diploma or Degree in Civil Engineering',
      'Minimum 2 years of on-site experience',
      'Strong understanding of construction safety protocols'
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHero 
        title="Careers at BEBL Constructions" 
        subtitle="Join Our Team of Innovative Builders"
        image="/careers_hero/1.jpg"
      />
      <Header />
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {jobRoles.map((role, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-gray-600 mb-2">{role.department} | {role.location}</p>
              <p className="mb-4">{role.description}</p>
              <h4 className="font-medium mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {role.requirements.map((req, reqIndex) => (
                  <li key={reqIndex}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
          <CareersApplyForm />
        </div>
      </section>
    </div>
  );
} 