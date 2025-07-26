"use client";
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

interface CareersApplyFormProps {
  prefilledRole?: string;
  onSuccessfulSubmit?: () => void;
}

export default function CareersApplyForm({ 
  prefilledRole = '', 
  onSuccessfulSubmit 
}: CareersApplyFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedInUrl: '',
    desiredRole: prefilledRole,
    experience: '',
    coverLetter: ''
  });

  useEffect(() => {
    // Update desiredRole if prefilledRole changes
    setFormData(prev => ({
      ...prev,
      desiredRole: prefilledRole
    }));
  }, [prefilledRole]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // LinkedIn URL validation
    const linkedInRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
    if (formData.linkedInUrl && !linkedInRegex.test(formData.linkedInUrl)) {
      toast({
        title: 'Invalid LinkedIn URL',
        description: 'Please provide a valid LinkedIn profile URL',
        variant: 'destructive'
      });
      return;
    }

    // Here you would typically send the form data to a backend service
    console.log('Submitted Application:', formData);
    
    toast({
      title: 'Application Submitted',
      description: 'Thank you for your application. We will review it shortly.',
      variant: 'default'
    });

    // Call onSuccessfulSubmit if provided
    if (onSuccessfulSubmit) {
      onSuccessfulSubmit();
    }

    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      linkedInUrl: '',
      desiredRole: prefilledRole, // Keep the prefilled role if provided
      experience: '',
      coverLetter: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block mb-2 text-sm font-medium">Full Name *</label>
          <Input 
            type="text" 
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email *</label>
          <Input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
          <Input 
            type="tel" 
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="linkedInUrl" className="block mb-2 text-sm font-medium">LinkedIn Profile</label>
          <Input 
            type="url" 
            id="linkedInUrl"
            name="linkedInUrl"
            value={formData.linkedInUrl}
            onChange={handleChange}
            placeholder="LinkedIn profile URL"
            className="w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block mb-2 text-sm font-medium">Years of Experience</label>
        <Input 
          type="number" 
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Enter years of experience"
          min="0"
          max="50"
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="coverLetter" className="block mb-2 text-sm font-medium">Cover Letter</label>
        <Textarea 
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Tell us why you're a great fit for this role..."
          rows={5}
          className="w-full"
        />
      </div>

      <div className="text-center">
        <Button type="submit" size="lg" className="w-full">
          Submit Application
        </Button>
      </div>
    </form>
  );
}
