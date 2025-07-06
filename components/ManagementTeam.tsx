"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/management_hero/1.jpg)'}}>
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
  useEffect(() => {
    fetch("/management_team/team.csv")
      .then(res => res.text())
      .then(csv => setTeamMembers(parseTeamCSV(csv)));
  }, []);

  // Get unique categories from CSV
  const categories = ["All", ...Array.from(new Set(teamMembers.map(m => m.category)))];
  const filteredMembers = filter === "All"
    ? teamMembers
    : teamMembers.filter(member => member.category === filter);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex gap-4 justify-center">
        {categories.map((cat) => (
        <Button 
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
        >
            {cat}
        </Button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
            <div className="aspect-[3/2] relative">
              <Image
                src={`/management_team/${member.image}`}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-primary font-medium mt-1 mb-3">{member.designation}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export { ManagementTeamHero }; 