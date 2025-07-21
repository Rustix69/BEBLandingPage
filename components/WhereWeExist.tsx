"use client";

import WorldMap from "@/components/ui/world-map";

const locations = [
  // Primary Locations in India
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 19.0760, lng: 72.8777, label: "Mumbai Office" },
  },
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 12.9716, lng: 77.5946, label: "Bangalore Office" },
  },
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 28.6139, lng: 77.2090, label: "Delhi Office" },
  },
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 22.5726, lng: 88.3639, label: "Kolkata Branch" },
  },
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 13.0827, lng: 80.2707, label: "Chennai Outpost" },
  },
  
  // International Connections
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore Consulting" },
  },
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 25.2048, lng: 55.2708, label: "Dubai Project Office" },
  },
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 40.7128, lng: -74.0060, label: "New York Liaison" },
  },
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 51.5074, lng: -0.1278, label: "London Strategic Center" },
  },
  
  // Additional Indian Locations
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 23.0225, lng: 72.5714, label: "Ahmedabad Project Site" },
  },
  {
    start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad HQ" },
    end: { lat: 26.9124, lng: 75.7873, label: "Jaipur Regional Office" },
  },
];

const WhereWeExist = () => {
  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-20 md:pb-28">
      {/* Section Title Row */}
      <div className="text-center mb-16">
        <h4 className="text-sm uppercase tracking-wider text-primary mb-3">Our Global Footprint</h4>
        <h2 className="text-4xl font-bold text-heading mb-4">Where We Exist</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From local landmarks to international horizons, our strategic presence spans across multiple cities and continents, showcasing our commitment to global excellence in construction and development.
        </p>
      </div>

      {/* World Map */}
      <div className="max-w-6xl mx-auto px-4">
        <WorldMap dots={locations} />
      </div>
    </section>
  );
};

export default WhereWeExist; 