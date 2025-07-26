"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

const headOffice = {
  title: "Head Office",
  city: "Mumbai",
  address: [
    "Shiv Sagar Estate, 'A' Block, 2nd Floor",
    "Dr. Annie Besant Road,",
    "Worli, Mumbai 400 018"
  ],
  phone: "+91 22 2288 8888",
  email: "info@bebl.com",
  website: "www.bebl.com",
  mapUrl: "https://www.google.com/maps?q=Shiv+Sagar+Estate+A+Block+Worli+Mumbai+400018",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

const offices = [
  {
    title: "Regional Office – North",
    city: "New Delhi",
    address: [
      "311, DLF Tower 'A', 3rd Floor, Jasola",
      "New Delhi 110 044"
    ],
    phone: "+91 11 4913 5500",
    email: "beb@delhi.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=311+DLF+Tower+A+Jasola+New+Delhi",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5!2d77.2!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
  },
  {
    title: "Regional Office – South",
    city: "Chennai",
    address: [
      "401-402, 4th Floor, Sigma Wing, Raheja Tower, 177 Anna Salai",
      "Chennai 600 002"
    ],
    phone: "+91 44 2860 8000",
    email: "beb@chennai.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=401+Raheja+Tower+Anna+Salai+Chennai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
  }
];

const branches = [
  {
    title: "Hyderabad",
    address: [
      "102, Imperial Apartment",
      "H. No.6-3-866/2, Greenlands, Begumpet Ameer Pet Rd, Hyderabad 500 016, Telangana"
    ],
    phone: "+91 40 6613 9908",
    email: "beb@hyd.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=102+Imperial+Apartment+Hyderabad",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.5!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
  },
  {
    title: "Pune",
    address: [
      "Millennium Star, Office No. 2, 2nd Floor",
      "153, Bund Garden – Dhole Patil Road, Pune 411 001, Maharashtra"
    ],
    phone: "+91 20 6620 4867",
    email: "beb@pune.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=Millennium+Star+Pune",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.5!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
  }
];

// Add a type guard for city
function hasCity(office: any): office is { city: string } {
  return typeof office.city === 'string';
}

export default function ContactUs() {
  const images = [
    "/home_hero/1.jpg",
    "/home_hero/2.jpg",
    "/home_hero/3.jpg",
    "/home_hero/4.jpg",
    "/home_hero/5.jpg",
  ];
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
            Contact Us
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl text-center text-neutral-200 max-w-xl px-4">
            Get in touch with our team
          </motion.p>
        </motion.div>
      </ImagesSlider>
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8 mb-16">
          <div className="grid grid-cols-3 gap-16">
            {[headOffice, ...offices, ...branches].map((office, idx) => (
              <PinContainer
                key={idx}
                title={office.title}
                href={office.mapUrl}
                imageUrl={`/contact_hero/1.jpg`}
                description={office.address.join(", ")}
                containerClassName="h-full"
                className="flex flex-col h-full"
              >
                <div className="flex flex-col space-y-2 flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-[#b45f1d]" />
                      <a href={`tel:${office.phone}`} className="text-sm text-gray-800 hover:text-[#b45f1d] hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#b45f1d]" />
                      <a href={`mailto:${office.email}`} className="text-sm text-gray-800 hover:text-[#b45f1d] hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </PinContainer>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 