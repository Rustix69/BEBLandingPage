"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const CareersApplyForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    gender: '',
    maritalStatus: '',
    postAppliedFor: '',
    qualifications: '',
    experienceInYears: '',
    cv: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      cv: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.postAppliedFor || !formData.qualifications || !formData.experienceInYears) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields marked with *"
      });
      return;
    }

    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We will review it and get back to you soon."
    });

    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      gender: '',
      maritalStatus: '',
      postAppliedFor: '',
      qualifications: '',
      experienceInYears: '',
      cv: null
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold font-space-grotesk text-primary">
            Apply Online
          </CardTitle>
          <p className="text-gray-600">
            Interested candidates can fill the form below: (All fields marked in 
            <span className="text-red-500 font-bold"> *</span> are mandatory)
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 border-2 border-amber-200 focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 border-2 border-amber-200 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email ID <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 border-2 border-amber-200 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="contactNumber" className="text-sm font-medium text-gray-700">
                Contact Number:
              </Label>
              <Input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="mt-1 border-2 border-amber-200 focus:border-primary"
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">
                Gender <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">
                Marital Status <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.maritalStatus}
                onValueChange={(value) => setFormData(prev => ({ ...prev, maritalStatus: value }))}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single" />
                  <Label htmlFor="single">Single</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="married" id="married" />
                  <Label htmlFor="married">Married</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="postAppliedFor" className="text-sm font-medium text-gray-700">
                Post Applied For <span className="text-red-500">*</span>
              </Label>
              <Input
                id="postAppliedFor"
                name="postAppliedFor"
                type="text"
                value={formData.postAppliedFor}
                onChange={handleInputChange}
                required
                className="mt-1 border-2 border-amber-200 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="qualifications" className="text-sm font-medium text-gray-700">
                Qualifications <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleInputChange}
                required
                rows={4}
                className="mt-1 border-2 border-amber-200 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="experienceInYears" className="text-sm font-medium text-gray-700">
                Experience in Years <span className="text-red-500">*</span>
              </Label>
              <Input
                id="experienceInYears"
                name="experienceInYears"
                type="number"
                min="0"
                value={formData.experienceInYears}
                onChange={handleInputChange}
                required
                className="mt-1 border-2 border-amber-200 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="cv" className="text-sm font-medium text-gray-700">
                Upload CV <span className="text-red-500">*</span>
              </Label>
              <Input
                id="cv"
                name="cv"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="mt-1 border-2 border-amber-200 focus:border-primary"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Submit
              </Button>
              <Button type="button" onClick={handleReset} variant="outline">
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareersApplyForm;
