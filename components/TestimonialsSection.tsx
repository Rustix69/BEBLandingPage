"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const testimonials = [
  {
    name: "Alex Thompson",
    username: "@alexthompson",
    body: "Outstanding service and exceptional results! The team's dedication to quality is unmatched.",
    img: "https://avatar.vercel.sh/alexthompson",
  },
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    body: "Innovative solutions and timely delivery made our project a huge success.",
    img: "https://avatar.vercel.sh/sarahchen",
  },
  {
    name: "Robert Miller",
    username: "@robmiller",
    body: "Their expertise in construction management sets them apart from competitors.",
    img: "https://avatar.vercel.sh/robmiller",
  },
  {
    name: "Emily Davis",
    username: "@emilydavis",
    body: "Professional team that consistently exceeds expectations. Highly recommended!",
    img: "https://avatar.vercel.sh/emilydavis",
  },
  {
    name: "James Wilson",
    username: "@jameswilson",
    body: "Exceptional attention to detail and outstanding project coordination.",
    img: "https://avatar.vercel.sh/jameswilson",
  },
  {
    name: "Lisa Kumar",
    username: "@lisakumar",
    body: "Their commitment to sustainability and innovation is truly remarkable.",
    img: "https://avatar.vercel.sh/lisakumar",
  },
  {
    name: "David Martinez",
    username: "@davidm",
    body: "Seamless execution and excellent communication throughout the project.",
    img: "https://avatar.vercel.sh/davidm",
  },
  {
    name: "Michelle Wong",
    username: "@mwong",
    body: "Best-in-class construction services with unmatched professionalism.",
    img: "https://avatar.vercel.sh/mwong",
  },
  {
    name: "Chris Anderson",
    username: "@chrisand",
    body: "Their expertise in handling complex projects is truly impressive.",
    img: "https://avatar.vercel.sh/chrisand",
  },
  {
    name: "Rachel Patel",
    username: "@rpatel",
    body: "Reliable, efficient, and always delivering beyond expectations.",
    img: "https://avatar.vercel.sh/rpatel",
  }
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h4 className="text-sm uppercase tracking-wider text-primary mb-3">What Our Clients Say</h4>
        <h2 className="text-4xl font-bold text-heading mb-4">Real Stories from Real Customers</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover why leading businesses trust us with their construction projects. Here's what our clients have to say about their experiences working with us.
        </p>
      </div>
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]" repeat={2}>
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1rem]" repeat={2}>
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.username} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
