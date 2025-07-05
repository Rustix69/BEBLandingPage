"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const LocationsSection = () => {
  const regionalOffices = [
    {
      title: "REGIONAL OFFICE – WEST",
      subtitle: "Mumbai (Head Office)",
      address: "Shiv Sagar Estate, 'A' Block, 2nd Floor\nDr. Annie Besant Road,\nWorli, Mumbai 400 018",
      phone: "+ 91 22 66546500",
      fax: "+ 91 22 66546550",
      email: "beb@bebanco.com",
      website: "www.bebanco.com"
    },
    {
      title: "REGIONAL OFFICE – NORTH",
      subtitle: "New Delhi",
      address: "311, DLF Tower 'A'\n3rd Floor, Jasola\nNew Delhi 110 044",
      phone: "+ 91 11 4913 5500",
      fax: "+ 91 11 4913 5501",
      email: "beb@delhi.bebanco.com"
    },
    {
      title: "REGIONAL OFFICE – SOUTH",
      subtitle: "Chennai",
      address: "401-402, 4th Floor, Sigma Wing\nRaheja Tower, 177 Anna Salai\nChennai 600 002",
      phone: "+ 91 44 2860 8000",
      fax: "+ 91 44 2860 8010",
      email: "beb@chennai.bebanco.com"
    }
  ];

  const branchOffices = [
    {
      city: "Hyderabad",
      address: "102, Imperial Apartment\nH. No.6-3-866/2, Greenlands, Begumpet Ameer Pet Rd,\nHyderabad 500 016",
      phone: "+ 91 40 6613 9908",
      fax: "+ 91 40 6569 9907",
      email: "beb@hyd.bebanco.com"
    },
    {
      city: "Pune",
      address: "Millennium Star, Office No. 2, 2nd Floor\n153, Bund Garden – Dhok Pafal Road\nPune 411 001",
      phone: "+ 91 20 6620 4867",
      fax: "+ 91 20 2616 0683",
      email: "beb@pune.bebanco.com"
    }
  ];

  const partners = {
    bankers: ["BNP Paribas", "IDBI Bank Ltd.", "ICICI Bank Ltd.", "YES Bank", "Bank of India", "Axis Bank"],
    solicitors: ["Mulla & Mulla & Craigie Blunt & Caroe"],
    auditors: ["M/s Thacker Butala Desai"]
  };

  return (
    <div className="space-y-8">
      {/* Regional Offices */}
      <div>
        <h2 className="text-3xl font-bold text-primary font-space-grotesk mb-6">Regional Offices</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {regionalOffices.map((office, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary font-space-grotesk">
                  {office.title}
                </CardTitle>
                <p className="text-sm font-semibold text-gray-700 font-space-grotesk">
                  {office.subtitle}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm text-gray-600">{office.phone}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{office.fax}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-sm text-orange-600 hover:underline">
                    {office.email}
                  </a>
                </div>
                {office.website && (
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href={`http://${office.website}`} className="text-sm text-orange-600 hover:underline">
                      {office.website}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Branch Offices */}
      <div>
        <h2 className="text-3xl font-bold text-primary font-space-grotesk mb-6">Branch Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branchOffices.map((office, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-primary font-space-grotesk">
                  {office.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm text-gray-600">{office.phone}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{office.fax}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-sm text-orange-600 hover:underline">
                    {office.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold text-primary font-space-grotesk">
              Bankers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {partners.bankers.map((bank, index) => (
                <li key={index} className="text-sm text-gray-600">• {bank}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold text-primary font-space-grotesk">
              Solicitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {partners.solicitors.map((solicitor, index) => (
                <li key={index} className="text-sm text-gray-600">• {solicitor}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold text-primary font-space-grotesk">
              Auditors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {partners.auditors.map((auditor, index) => (
                <li key={index} className="text-sm text-gray-600">• {auditor}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LocationsSection;
