"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Outstanding service and exceptional results! The team's dedication to quality is unmatched.",
    name: "Alex Thompson",
    title: "@alexthompson",
  },
  {
    quote: "Innovative solutions and timely delivery made our project a huge success.",
    name: "Sarah Chen",
    title: "@sarahchen",
  },
  {
    quote: "Their expertise in construction management sets them apart from competitors.",
    name: "Robert Miller",
    title: "@robmiller",
  },
  {
    quote: "Professional team that consistently exceeds expectations. Highly recommended!",
    name: "Emily Davis",
    title: "@emilydavis",
  },
  {
    quote: "Exceptional attention to detail and outstanding project coordination.",
    name: "James Wilson",
    title: "@jameswilson",
  },
  {
    quote: "Their commitment to sustainability and innovation is truly remarkable.",
    name: "Lisa Kumar",
    title: "@lisakumar",
  },
  {
    quote: "Seamless execution and excellent communication throughout the project.",
    name: "David Martinez",
    title: "@davidm",
  },
  {
    quote: "Best-in-class construction services with unmatched professionalism.",
    name: "Michelle Wong",
    title: "@mwong",
  },
  {
    quote: "Their expertise in handling complex projects is truly impressive.",
    name: "Chris Anderson",
    title: "@chrisand",
  },
  {
    quote: "Reliable, efficient, and always delivering beyond expectations.",
    name: "Rachel Patel",
    title: "@rpatel",
  }
];

const TestimonialsSection = () => {
  return (
    <section className=" mt-12 bg-white">
      <div className="text-center">
        <h4 className="text-sm uppercase tracking-wider text-primary mb-3">What Our Clients Say</h4>
        <h2 className="text-4xl font-bold text-heading mb-4">Real Stories from Real Customers</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover why leading businesses trust us with their construction projects. Here's what our clients have to say about their experiences working with us.
        </p>
      </div>
      
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
