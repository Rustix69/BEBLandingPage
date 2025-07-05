import { Card } from "@/components/ui/card";
import Image from "next/image";

const equipmentList = [
  { name: "PRE CAST PLANT", specs: "capacity – BUA 2.5msft" },
  { name: "CUT, BEND & STIR UP MAKING PLANTS" },
  { name: "PLACER BOOMS", specs: "33.1m" },
  { name: "TOWER CRANES", specs: "upto 12 ton" },
  { name: "BATCHING PLANTS", specs: "upto 70 Cu.m/Hr" },
  { name: "CONCRETE PUMPS", specs: "upto 70 Cu.m/Hr" },
  { name: "PASSENGER LIFTS", specs: "Twin cage upto 3 ton" },
  { name: "EXCAVATORS" },
  { name: "SKID STEER LOADERS" },
  { name: "GENERATING SETS", specs: "upto 250 KVA" },
  { name: "CONCRETE MIXERS" },
  { name: "TRANSIT MIXERS", specs: "upto 6 Cu.m" },
  { name: "BUILDER HOISTS" },
  { name: "MINI DUMPERS", specs: "2 ton" },
  { name: "BAR CUTTING MACHINES" },
  { name: "BAR BENDING MACHINES" },
  { name: "PLASTER MACHINES" },
  { name: "CUBE TESTING MACHINES", specs: "upto 300 ton" },
  { name: "ROPE SUSPENDED PLATFORMS" },
  { name: "COMPRESSORS", specs: "300 CFM" },
  { name: "MECHANICAL DISTRIBUTORS", specs: "2 Arms" },
  { name: "SCISSOR LIFTS" },
  { name: "TIG WELDING MACHINES" },
  { name: "TOTAL STATIONS" },
  { name: "TRACTORS" },
  { name: "DIESEL DEWATERING PUMPS", specs: "upto 14 HP" },
  { name: "MINI TRUCKS" },
  { name: "SYSTEM FORMWORK", specs: "MFE,MEVA,PERI" }
];

export default function PlantAndMachinerySection() {
  return (
    <div className="space-y-8">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/placeholder.svg"
          alt="Plant and Machinery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Plant and Machinery</h1>
        </div>
      </div>

      {/* Description */}
      <Card className="p-6 bg-white">
        <p className="text-gray-700 leading-relaxed">
          With extensive experience of projects of a varied nature BEB has the capability to swiftly mobilise its considerable resources to undertake challenging projects. The company has innovative pre cast concrete-production facilities and a substantial range of plant and machinery including placer booms, tower cranes, batching plants, transit mixers, dumpers, excavators, paving breakers, hoists and a large inventory of system formwork.
        </p>
      </Card>

      {/* Equipment List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">MAJOR EQUIPMENT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipmentList.map((equipment, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-primary">{equipment.name}</h3>
                {equipment.specs && (
                  <span className="text-sm text-gray-600 mt-1">
                    {equipment.specs}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 