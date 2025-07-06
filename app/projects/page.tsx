"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Header";
import PageHero from "@/components/PageHero";

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
  useEffect(() => {
    fetch("/our_projects/projects.csv")
      .then(res => res.text())
      .then(csv => setProjects(parseProjectsCSV(csv)));
  }, []);

  const categories = getCategories(projects);
  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter(project => project.type === selectedCategory);

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
      <Navbar />
      <PageHero title="Our Projects" subtitle="Explore our landmark projects across India" image="/our_projects_hero/1.jpg" />
      <main className="container mx-auto px-4 py-8 mt-6">
        {/* Page Title */}
        {/* <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1> */}

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
    </>
  );
} 