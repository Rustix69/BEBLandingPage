"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    designation: '',
    contactNo: '',
    email: '',
    address: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      designation: '',
      contactNo: '',
      email: '',
      address: '',
      comments: ''
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary font-space-grotesk">
          Contact Form
        </CardTitle>
        <p className="text-sm text-gray-600">
          Please fill required information in given fields below: (All fields marked in <span className="text-red-500">*</span> are mandatory)
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="font-space-grotesk">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="border-2 border-amber-200 focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="font-space-grotesk">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="border-2 border-amber-200 focus:border-primary"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="companyName" className="font-space-grotesk">
              Company Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="border-2 border-amber-200 focus:border-primary"
            />
          </div>

          <div>
            <Label htmlFor="designation" className="font-space-grotesk">
              Designation:
            </Label>
            <Input
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="border-gray-300"
            />
          </div>

          <div>
            <Label htmlFor="contactNo" className="font-space-grotesk">
              Contact No <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              required
              className="border-2 border-amber-200 focus:border-primary"
            />
          </div>

          <div>
            <Label htmlFor="email" className="font-space-grotesk">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border-2 border-amber-200 focus:border-primary"
            />
          </div>

          <div>
            <Label htmlFor="address" className="font-space-grotesk">
              Address:
            </Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border-gray-300 min-h-[60px]"
            />
          </div>

          <div>
            <Label htmlFor="comments" className="font-space-grotesk">
              Comments:
            </Label>
            <Textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              className="border-gray-300 min-h-[80px]"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="font-space-grotesk">
              Submit
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} className="font-space-grotesk">
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
