"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Header";

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  category: "Heavy Engineering" | "Special Projects" | "Utility" | "Commercial" | "Residential";
  status: "Completed" | "Ongoing";
  location: string;
  year: number;
  imageUrl: string;
};

// Count up animation hook (from ProfileSection)
function useCountUp(target: number, duration = 1) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [target, duration]);
  return [count, ref] as const;
}

// Expanded projects array to 9 projects
const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Advanced infrastructure development with cutting-edge engineering solutions",
    category: "Heavy Engineering",
    status: "Completed",
    location: "Mumbai, Maharashtra",
    year: 2024,
    imageUrl: "/completed/stadium.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Large-scale industrial complex with state-of-the-art facilities",
    category: "Heavy Engineering",
    status: "Ongoing",
    location: "Pune, Maharashtra",
    year: 2024,
    imageUrl: "/completed/ramada.jpeg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Unique architectural marvel with innovative design concepts",
    category: "Special Projects",
    status: "Completed",
    location: "Delhi, NCR",
    year: 2023,
    imageUrl: "/completed/petit-tower.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Modern shopping mall with premium amenities",
    category: "Commercial",
    status: "Completed",
    location: "Hyderabad, Telangana",
    year: 2022,
    imageUrl: "/completed/rubix-mall.avif",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Residential tower with luxury apartments",
    category: "Residential",
    status: "Ongoing",
    location: "Bangalore, Karnataka",
    year: 2024,
    imageUrl: "/completed/viceroy-park.jpg",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Eco-friendly business park with green certification",
    category: "Utility",
    status: "Completed",
    location: "Chennai, Tamil Nadu",
    year: 2023,
    imageUrl: "/completed/sri-satya.webp",
  },
  {
    id: 7,
    title: "Project 7",
    description: "Award-winning hotel and convention center",
    category: "Commercial",
    status: "Completed",
    location: "Goa",
    year: 2022,
    imageUrl: "/completed/ramada.jpeg",
  },
  {
    id: 8,
    title: "Project 8",
    description: "State-of-the-art sports stadium",
    category: "Special Projects",
    status: "Ongoing",
    location: "Ahmedabad, Gujarat",
    year: 2024,
    imageUrl: "/completed/stadium.jpg",
  },
  {
    id: 9,
    title: "Project 9",
    description: "Premium residential enclave with smart home features",
    category: "Residential",
    status: "Completed",
    location: "Kolkata, West Bengal",
    year: 2023,
    imageUrl: "/completed/aparna.webp",
  },
];

const categories = [
  "All Projects",
  "Heavy Engineering",
  "Special Projects",
  "Utility",
  "Commercial",
  "Residential",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const stats = {
    total: projects.length,
    completed: projects.filter(p => p.status === "Completed").length,
    ongoing: projects.filter(p => p.status === "Ongoing").length,
  };

  // In the component, use count up for stats
  const [totalCount, totalRef] = useCountUp(stats.total, 1);
  const [completedCount, completedRef] = useCountUp(stats.completed, 1);
  const [ongoingCount, ongoingRef] = useCountUp(stats.ongoing, 1);

  return (
    <main className="container mx-auto px-4 py-8 mt-24">
      <Navbar />
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>

      {/* Project Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="p-6 text-center">
          <h2 className="text-4xl font-bold" ref={totalRef}>{totalCount}</h2>
          <p className="text-gray-600">Total Projects</p>
        </Card>
        <Card className="p-6 text-center">
          <h2 className="text-4xl font-bold" ref={completedRef}>{completedCount}</h2>
          <p className="text-gray-600">Completed</p>
        </Card>
        <Card className="p-6 text-center">
          <h2 className="text-4xl font-bold" ref={ongoingRef}>{ongoingCount}</h2>
          <p className="text-gray-600">Ongoing</p>
        </Card>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge variant="secondary">
                  {project.category}
                </Badge>
                <Badge variant={project.status === "Completed" ? "default" : "destructive"}>
                  {project.status}
                </Badge>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
} 