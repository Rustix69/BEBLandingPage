import { Card } from "@/components/ui/card";
import Image from "next/image";

type Award = {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
};

const awards: Award[] = [
  {
    title: "CIDC Safety Award",
    year: "2013",
    description: "Safety Bloomdale Nagpur",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "CIDC Vishwakarma Award",
    year: "2013",
    description: "for Construction, Health, Safety & Environment",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "CIDC Vishwakarma Award",
    year: "2012",
    description: "for Construction, Health, Safety & Environment",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "CIDC Vishwakarma Award",
    year: "2011",
    description: "for Best Professionally Managed Company",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "CIDC Vishwakarma Award",
    year: "2011",
    description: "for 'Best Project' Brigade Gateway, Bangalore",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "CIDC Vishwakarma Award",
    year: "2010",
    description: "for Best Professionally Managed Company",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Brigade Golden Star",
    year: "2009",
    description: "For excellence in safety at Brigade Gateway Project, Bangalore",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Brigade Group Helmet of Honour",
    year: "2009",
    description: "for Excellence in Safety Management",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "ACCE Sarvamangala Award",
    year: "2007",
    description: "Structural Steel Roofing at Turbhe Railway Station, Mumbai",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Builders Association of India Lifetime Achievement Award",
    year: "2003",
    description: "Mumbai",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Indian Concrete Institute Lifetime Achievement Award",
    year: "2002",
    description: "Mumbai",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "International Federation of Asian & Western Pacific Contractors Association Award",
    year: "1996",
    description: "Seoul, Korea",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Quality Construction Award",
    year: "1994",
    description: "Konkan Railway",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "ACCE Sarvamangala Award",
    year: "1992",
    description: "Baitul Haj Building, Mumbai",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "International Federation of Asian & Western Pacific Contractors Association Award",
    year: "1992",
    description: "Tokyo, Japan",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Builders Association of India Award",
    year: "1982",
    description: "Mumbai",
    imageUrl: "/placeholder.svg"
  }
];

export default function AwardsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Awards & Achievements</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <Card key={index} className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
            <div className="aspect-[3/2] relative">
              <Image
                src={award.imageUrl}
                alt={award.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900 flex-1">{award.title}</h3>
                <span className="text-primary font-semibold ml-2">{award.year}</span>
              </div>
              <p className="text-gray-600 text-sm">{award.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 