"use client";

import { Card } from "@/components/ui/card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TeamMember = {
  id: number;
  name: string;
  designation: string;
  category: string;
  description: string;
  image: string;
};

// CSV parsing helper
function parseTeamCSV(csv: string): TeamMember[] {
  const lines = csv.trim().split('\n');
  const header = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const obj: any = {};
    header.forEach((key, i) => {
      obj[key.trim()] = values[i]?.trim();
    });
    obj.id = Number(obj.id);
    return obj as TeamMember;
  });
}

// Add Management Team Hero Section
const ManagementTeamHero = () => (
  <section className="relative h-[45vh] min-h-[220px] flex items-center justify-center overflow-hidden w-full p-0 m-0">
    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/management_hero/1.jpg)' }}>
      <div className="absolute inset-0 w-full h-full bg-black/40"></div>
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-0 mx-0 mt-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl tracking-wider mb-2 text-center font-cormorant">Management Team</h1>
      <div className="w-24 h-1 rounded-full bg-white opacity-90 mb-2 grow-divider"></div>
      <span className="block text-lg md:text-2xl font-semibold text-white mb-1 text-center tracking-wide font-cormorant">Meet the leaders behind our success</span>
    </div>
  </section>
);

export default function ManagementTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy data for demonstration
  const dummyTeamMembers: TeamMember[] = [
    // Directors (5)
    { id: 1, name: "John Doe", designation: "CEO", category: "Director", description: "Visionary leader with 20 years of experience", image: "team01.png" },
    { id: 2, name: "Jane Smith", designation: "COO", category: "Director", description: "Operations expert driving strategic growth", image: "team02.png" },
    { id: 3, name: "Michael Johnson", designation: "CTO", category: "Director", description: "Technology innovator and digital transformation expert", image: "team03.png" },
    { id: 4, name: "Emily Brown", designation: "CFO", category: "Director", description: "Financial strategist with global market insights", image: "team04.png" },
    { id: 5, name: "David Wilson", designation: "Chairman", category: "Director", description: "Seasoned industry veteran and thought leader", image: "team05.png" },

    // Team Members (10) - cycling through the first 5 images
    { id: 6, name: "Sarah Lee", designation: "Senior Project Manager", category: "Team", description: "Expert in large-scale construction management", image: "team01.png" },
    { id: 7, name: "Robert Chen", designation: "Design Director", category: "Team", description: "Innovative architectural design specialist", image: "team02.png" },
    { id: 8, name: "Maria Rodriguez", designation: "Sustainability Lead", category: "Team", description: "Green building and eco-friendly design expert", image: "team03.png" },
    { id: 9, name: "Alex Kim", designation: "Engineering Manager", category: "Team", description: "Technical excellence and precision engineering", image: "team04.png" },
    { id: 10, name: "Olivia Taylor", designation: "Client Relations Director", category: "Team", description: "Customer-centric approach and strategic partnerships", image: "team05.png" },
    { id: 11, name: "Daniel Park", designation: "Operations Specialist", category: "Team", description: "Streamlining processes and operational efficiency", image: "team01.png" },
    { id: 12, name: "Emma Watson", designation: "Marketing Director", category: "Team", description: "Brand strategy and market positioning expert", image: "team02.png" },
    { id: 13, name: "Ryan Garcia", designation: "Quality Assurance Manager", category: "Team", description: "Ensuring highest standards of construction quality", image: "team03.png" },
    { id: 14, name: "Sophia Lee", designation: "HR Director", category: "Team", description: "Talent development and organizational culture champion", image: "team04.png" },
    { id: 15, name: "Thomas Wright", designation: "Risk Management Lead", category: "Team", description: "Strategic risk mitigation and compliance expert", image: "team05.png" }
  ];

  useEffect(() => {
    setTeamMembers(dummyTeamMembers);
  }, []);

  // Get unique categories from team members
  const categories = ["All", ...Array.from(new Set(teamMembers.map(m => m.category)))];

  // Filter and search logic
  const filteredMembers = teamMembers.filter(member =>
    (filter === "All" || member.category === filter) &&
    (searchTerm === "" ||
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Determine hover color based on category
  const getCategoryColor = (category: string) => {
    return category === "Director"
      ? "bg-red-500/80 text-white"
      : "bg-green-500/80 text-white";
  };

  return (
    <div className="space-y-8 mt-16">
      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
          <div className="w-full md:w-[80%]">
            <Input 
              type="text" 
              placeholder="Search team members..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Select 
              value={filter} 
              onValueChange={(value) => setFilter(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <FollowerPointerCard
              key={member.id}
              title={
                <div className={`${getCategoryColor(member.category)} px-2 py-1 rounded-md`}>
                  {member.category}
                </div>
              }
            >
              <Card className="overflow-hidden bg-white hover:shadow-xl transition-shadow group h-full flex flex-col">
                <div className="relative w-full pb-[120%] mx-auto max-w-[90%]">
                  <Image
                    src={`/management_team/${member.image}`}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 bg-gray-100"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2 text-sm">{member.designation}</p>
                  <p className="text-gray-600 text-xs leading-relaxed flex-grow">{member.description}</p>
                </div>
              </Card>
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ManagementTeamHero }; 