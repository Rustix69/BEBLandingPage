"use client";

import India from "@react-map/india";

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

      {/* India Map */}
      <div className="ml-20 mx-auto px-1 md:px-4 flex justify-center">
        <India
          type="select-single"
          size={800}
          cityColors={{
            Maharashtra: '#b45f1d',
            Gujarat: '#e67e22',
            Rajasthan: '#16a085',
            Karnataka: '#2980b9',
            TamilNadu: '#8e44ad',
            Kerala: '#27ae60',
            WestBengal: '#c0392b',
            UttarPradesh: '#f39c12',
            Punjab: '#2c3e50',
            Haryana: '#d35400',
            Delhi: '#7f8c8d',
            MadhyaPradesh: '#34495e',
            Odisha: '#e74c3c',
            Assam: '#1abc9c',
            Bihar: '#9b59b6',
            Chhattisgarh: '#f1c40f',
            Jharkhand: '#e84393',
            Goa: '#00b894',
            HimachalPradesh: '#fdcb6e',
            Tripura: '#00cec9',
          }}
        />
      </div>
    </section>
  );
};

export default WhereWeExist; 