"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type TeamMember = {
  name: string;
  designation: string;
  about: string;
  imageUrl: string;
  type: "director" | "management";
};

const teamMembers: TeamMember[] = [
  // Directors
  {
    name: "Mr. Digant Kapadia",
    designation: "Managing Director",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "/placeholder.svg",
    type: "director"
  },
  {
    name: "Mr. Jeet D Kapadia",
    designation: "Director",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "/placeholder.svg",
    type: "director"
  },
  {
    name: "Mr. N Ravichandran",
    designation: "Independent Director",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "/placeholder.svg",
    type: "director"
  },
  {
    name: "Mr. Chandrakant Kantilal Shah",
    designation: "Independent Director",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "/placeholder.svg",
    type: "director"
  },
  {
    name: "Mrs. Nayana D Kapadia",
    designation: "Non-Executive Director",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "/placeholder.svg",
    type: "director"
  },
  // Management Team
  {
    name: "Mr. B. Singaravelu",
    designation: "Head of Operations – Southern Region",
    about: "A qualified Civil Engineer having joined the Organisation in July 2011. He has spent early part of his career acquiring considerable expertise in construction projects and has an experience of over 30 years. He is responsible for the operational and executive functions of the Southern Region.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Suresh Reejhsinghani",
    designation: "Vice President – Contracts",
    about: "A qualified M.Tech – Civil Engineer from IIT Bombay having joined the Organisation in October 2011. He has an experience of 37 years. He is responsible for Contracts Administration of the Organisation.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Shripad Ganesh Edkee",
    designation: "Vice President – Plant & Machinery",
    about: "A qualified Mechanical Engineer has been serving the Organisation since July 2010. He has an experience of 45 years. He is responsible for Plant & Machinery of the organisation.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Varughese George",
    designation: "Sr. General Manager – Human Resource",
    about: "A qualified Graduate in Management, PGDAM, DCS having joined the Organisation in January 2006. He has an experience of 36 years. He is responsible for the Human Resource of the Organisation.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Swamy Balakrishna",
    designation: "General Manager – Finance & Accounts",
    about: "A qualified Chartered Accountant and Company Secretary is serving the Company since June 2014. He has an experience of over 30 years. His responsibilities includes all accounting and Finance functions of the Organisation including Taxation and Statutory compliances.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Ashish M Desai",
    designation: "Sr. General Manager – Projects (West)",
    about: "A qualified Civil Engineer has been with the Organisation since November 1984. He has an experience of 30 years. He is responsible for execution of Projects in the Western Region.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Darshan V Desai",
    designation: "General Manager – Projects",
    about: "A qualified Civil Engineer has been with the Organisation since January 2006. He has an experience of 22 years. He is responsible for execution of Projects.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Sunil H Deshmukh",
    designation: "General Manager – Projects",
    about: "A qualified Civil Engineer having rejoined the Organisation in September 2008. He has an experience of 29 years. He is responsible for the execution of Projects.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Nilesh Shah",
    designation: "General Manager – Property Development",
    about: "A qualified Civil Engineer graduated in the year of 1993 and DBM (Finance) having joined the company in June 2007. He has an experience of 21 years. He is responsible for ensuring overall end to end Real Estate Project Sourcing and Completion.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Krishna Murari Shukla",
    designation: "Sr. Dy.General Manager – Projects",
    about: "A qualified Civil Engineer having joined the Organisation in August 2011. He has an experience of 35 years. He is responsible for the execution of Projects.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. P P Saha",
    designation: "Dy. General Manager – Projects",
    about: "A qualified Civil Engineer having joined the Organisation in May 1989. He has an experience of over 27 years. He is responsible for the execution of Projects.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Manohar D Chavan",
    designation: "Dy. General Manager – Estimation, Planning & Monitoring",
    about: "A qualified Civil Engineer having rejoined the Organisation in January 2012. He has an experience of 22 years. He is responsible for Estimation, Planning & Monitoring of the Organisation.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Manish C Gupta",
    designation: "Dy. General Manager – Cost Control Department",
    about: "A qualified Civil Engineer having joined the Organisation in January 2006. He has an experience of 22 years. He is responsible for Cost Control of the Organisation.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Mr. Johnson Varughese",
    designation: "Dy. General Manager – HR & Admin",
    about: "A qualified Arts Graduate joined the Organisation in July 1983. He has an experience of 35 years. He handles the entire gamut of Administration & HR activities.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Ms. Rupali V Karawade",
    designation: "Company Secretary",
    about: "A Post Graduate in Commerce, qualified Company Secretary and pursuing LLB, has been with the Organisation since March 2016. She has an experience of 6 years and is responsible for Secretarial and Compliance related matters of the Organisation.",
    imageUrl: "/placeholder.svg",
    type: "management"
  },
  {
    name: "Ms. Anila Jayachandran",
    designation: "Asst. General Manager – Information Technology",
    about: "A qualified Science Graduate, Honors Diploma in System Management, Oracle has been with the Organisation since 1991. She has an experience of 22 years on IT Functions.",
    imageUrl: "/placeholder.svg",
    type: "management"
  }
];

export default function ManagementTeam() {
  const [filter, setFilter] = useState<"all" | "director" | "management">("all");

  const filteredMembers = teamMembers.filter(member => 
    filter === "all" ? true : member.type === filter
  );

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex gap-4 justify-center">
        <Button 
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button 
          variant={filter === "director" ? "default" : "outline"}
          onClick={() => setFilter("director")}
        >
          Board of Directors
        </Button>
        <Button 
          variant={filter === "management" ? "default" : "outline"}
          onClick={() => setFilter("management")}
        >
          Management Team
        </Button>
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
            <div className="aspect-[3/2] relative">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-primary font-medium mt-1 mb-3">{member.designation}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.about}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 