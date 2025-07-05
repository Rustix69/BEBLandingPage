
const InstagramSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-4">
          Follow Us on Instagram
        </h2>
        <a 
          href="https://instagram.com/bestbuildgroup" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-space-grotesk text-accent hover:text-primary transition-colors underline"
        >
          @bestbuildgroup.com
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
