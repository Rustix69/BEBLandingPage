"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import CareersApplyForm from '@/components/CareersApplyForm';

export interface JobRole {
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
}

interface JobCardProps {
  role: JobRole;
}

export default function JobCard({ role }: JobCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div 
      className="border border-neutral-300 rounded-lg p-6 hover:shadow-lg transition-shadow relative"
    >
      <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
      <p className="text-gray-600 mb-2">{role.department} | {role.location}</p>
      <p className="mb-4">{role.description}</p>
      
      <h4 className="font-medium mb-2">Requirements:</h4>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {role.requirements.map((req, reqIndex) => (
          <li key={reqIndex}>{req}</li>
        ))}
      </ul>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button 
            className="w-full mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            Apply Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px] bg-white/90 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Apply for {role.title}
            </DialogTitle>
          </DialogHeader>
          <CareersApplyForm 
            prefilledRole={role.title}
            onSuccessfulSubmit={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
} 