import React from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image }) => (
  <section className="relative h-[45vh] min-h-[220px] flex items-center justify-center overflow-hidden w-full p-0 m-0">
    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${image})`}}>
      <div className="absolute inset-0 w-full h-full bg-black/40"></div>
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-0 mx-0 mt-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl tracking-wider mb-2 text-center font-cormorant heading-spacing">{title}</h1>
      <div className="w-24 h-1 rounded-full bg-white opacity-90 mb-2 grow-divider"></div>
      <span className="block text-lg md:text-2xl font-semibold text-white mb-1 text-center tracking-wide font-cormorant">{subtitle}</span>
    </div>
  </section>
);

export default PageHero; 