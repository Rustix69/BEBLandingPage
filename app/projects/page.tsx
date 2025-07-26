"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  status: string;
  type: string;
  location: string;
  year: string;
  image: string;
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

// CSV parsing helper
function parseProjectsCSV(csv: string): Project[] {
  const lines = csv.trim().split('\n');
  const header = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const obj: any = {};
    header.forEach((key, i) => {
      obj[key.trim()] = values[i]?.trim();
    });
    obj.id = Number(obj.id);
    return obj as Project;
  });
}

function getCategories(projects: Project[]) {
  const set = new Set<string>();
  projects.forEach(p => set.add(p.type));
  return ["All Projects", ...Array.from(set)];
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    fetch("/our_projects/projects.csv")
      .then(res => res.text())
      .then(csv => setProjects(parseProjectsCSV(csv)));
  }, []);

  const images = [
    "/home_hero/1.jpg",
    "/home_hero/2.jpg",
    "/home_hero/3.jpg",
    "/home_hero/4.jpg",
    "/home_hero/5.jpg",
  ];

  const categories = getCategories(projects);
  const statuses = ["All", "Completed", "Ongoing"];

  const filteredProjects = projects
    .filter(project => {
      // Filter by category
      if (selectedCategory !== "All Projects" && project.type !== selectedCategory) {
        return false;
      }
      // Filter by status
      if (selectedStatus !== "All" && project.status !== selectedStatus) {
        return false;
      }
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query)
        );
      }
      return true;
    });

  const stats = {
    total: projects.length,
    completed: projects.filter(p => p.status.toLowerCase() === "completed").length,
    ongoing: projects.filter(p => p.status.toLowerCase() === "ongoing").length,
  };

  // In the component, use count up for stats
  const [totalCount, totalRef] = useCountUp(stats.total, 1);
  const [completedCount, completedRef] = useCountUp(stats.completed, 1);
  const [ongoingCount, ongoingRef] = useCountUp(stats.ongoing, 1);

  return (
    <>
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center absolute inset-0"
        >
          <motion.h1 className="font-bold text-5xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Our Projects Till Date
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl text-center text-neutral-200 max-w-xl px-4">
            A Legacy of Excellence in Construction
          </motion.p>
        </motion.div>
      </ImagesSlider>
      <main className="container mx-auto px-4 py-8 mt-6">

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

        {/* Filters Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            {/* Search Bar */}
            <div className="w-full md:w-[60%]">
              <Input
                type="text"
                placeholder="Search projects by name, description or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Status Filter */}
            <div className="w-full md:w-[20%]">
              <Select
                value={selectedStatus}
                onValueChange={(value) => setSelectedStatus(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-[20%]">
              <Select
                value={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <CardContainer key={project.id} containerClassName="py-8">
              <CardBody className="h-auto w-full">
                <CardItem>
                  <Card className="overflow-hidden w-full">
                    <div className="aspect-video relative">
                      <img
                        src={`/our_projects/${project.image}`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge variant="secondary">
                          {project.type}
                        </Badge>
                        <Badge variant={project.status.toLowerCase() === "completed" ? "default" : "destructive"}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <CardItem
                        translateZ={20}
                        as="h3"
                        className="text-xl font-semibold mb-2"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ={10}
                        className="text-gray-600 mb-4"
                      >
                        {project.description}
                      </CardItem>
                      <CardItem
                        translateZ={5}
                        className="flex justify-between text-sm text-gray-500"
                      >
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </CardItem>
                    </div>
                  </Card>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </main>
    </>
  );
} 