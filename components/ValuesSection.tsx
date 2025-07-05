"use client";
import { Handshake, Award, Leaf } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Handshake,
      title: "Partnerships",
      description: "Bestbuild have created foundations built on mutual trust, respect and collaboration. And on always working towards a shared goal, and vision."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Bestbuild is involved in consistently exceeding expectations and delivering superior results, through our high standards and continuous improvement."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Bestbuild's sustainability involves creating a strong and resilient business that can thrive over the long term, by promoting efficiency, innovation, and responsible business practices."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <value.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk text-primary">
                {value.title}
              </h3>
              <p className="text-gray-700 font-space-grotesk leading-relaxed max-w-sm mx-auto">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
