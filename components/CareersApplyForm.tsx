"use client";
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const jobRoles = [
  'Project Manager',
  'Civil Engineer', 
  'Architect', 
  'Site Supervisor'
];

export default function CareersApplyForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedInUrl: '',
    desiredRole: '',
    experience: '',
    coverLetter: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      desiredRole: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.desiredRole) {
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

    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      linkedInUrl: '',
      desiredRole: '',
      experience: '',
      coverLetter: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block mb-2">Full Name *</label>
          <Input 
            type="text" 
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email *</label>
          <Input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block mb-2">Phone Number</label>
          <Input 
            type="tel" 
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 1234567890"
          />
        </div>
        <div>
          <label htmlFor="linkedInUrl" className="block mb-2">LinkedIn Profile URL</label>
          <Input 
            type="url" 
            id="linkedInUrl"
            name="linkedInUrl"
            value={formData.linkedInUrl}
            onChange={handleChange}
            placeholder="https://www.linkedin.com/in/username"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="desiredRole" className="block mb-2">Desired Role *</label>
          <Select 
            value={formData.desiredRole} 
            onValueChange={handleRoleChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              {jobRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="experience" className="block mb-2">Years of Experience</label>
          <Input 
            type="number" 
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Years of experience"
            min="0"
            max="50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="coverLetter" className="block mb-2">Cover Letter</label>
        <Textarea 
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Tell us why you're a great fit for this role..."
          rows={5}
        />
      </div>

      <div className="text-center">
        <Button type="submit" size="lg" className="w-full md:w-auto">
          Submit Application
        </Button>
      </div>
    </form>
  );
}
