"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import JobCard, { JobRole } from '@/components/JobCard';

const jobRoles: JobRole[] = [
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
  const images = [
    "/home_hero/1.jpg",
    "/home_hero/2.jpg",
    "/home_hero/3.jpg",
    "/home_hero/4.jpg",
    "/home_hero/5.jpg",
  ];

  return (
    <main>
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center absolute inset-0"
        >
          <motion.h1 className="font-bold text-5xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Careers at BEBL Constructions
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl text-center text-neutral-200 max-w-xl px-4">
            Build Your Future with Us
          </motion.p>
        </motion.div>
      </ImagesSlider>

      <div className="container mx-auto px-4 py-8">
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jobRoles.map((role, index) => (
              <JobCard key={index} role={role} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 