"use client";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const offices = [
  {
    title: "Regional Office – West",
    company: "Mumbai (Head Office)",
    address: [
      "Shiv Sagar Estate, 'A' Block, 2nd Floor",
      "Dr. Annie Besant Road,",
      "Worli, Mumbai 400 018"
    ],
    phone: "+91 22 66545000",
    fax: "+91 22 66545050",
    email: "beb@bebanco.com",
    website: "www.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=Shiv+Sagar+Estate,+A+Block,+2nd+Floor,+Dr.+Annie+Besant+Road,+Worli,+Mumbai+400018&output=embed"
  },
  {
    title: "Regional Office – North",
    company: "New Delhi",
    address: [
      "311, DLF Tower 'A'",
      "3rd Floor, Jasola",
      "New Delhi 110 044"
    ],
    phone: "+91 11 4913 5000",
    fax: "+91 11 4913 5001",
    email: "beb@delhi.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=311+DLF+Tower+A,+Jasola,+New+Delhi+110044&output=embed"
  },
  {
    title: "Regional Office – South",
    company: "Chennai",
    address: [
      "401-402, 4th Floor, Sigma Wing",
      "Raheja Tower, 177 Anna Salai",
      "Chennai 600 002."
    ],
    phone: "+91 44 2860 8000",
    fax: "+91 44 2860 8010",
    email: "beb@chennai.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=401-402+Sigma+Wing,+Raheja+Tower,+177+Anna+Salai,+Chennai+600002&output=embed"
  },
  {
    title: "Hyderabad",
    company: "",
    address: [
      "102, Imperial Apartment",
      "H. No.6-3-866/2, Greenlands, Begumpet Ameer Pet Rd,",
      "Hyderabad 500 016."
    ],
    phone: "+91 40 6613 9908",
    fax: "+91 40 6666 9907",
    email: "beb@hyd.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=102+Imperial+Apartment,+Greenlands,+Begumpet+Ameer+Pet+Rd,+Hyderabad+500016&output=embed"
  },
  {
    title: "Pune",
    company: "",
    address: [
      "Millennium Star, Office No. 2, 2nd Floor",
      "153, Bund Garden – Dhole Patil Road",
      "Pune 411 001"
    ],
    phone: "+91 20 6620 4867",
    fax: "+91 20 2616 0683",
    email: "beb@pune.bebanco.com",
    mapUrl: "https://www.google.com/maps?q=Millennium+Star,+Office+No+2,+2nd+Floor,+153+Bund+Garden+–+Dhole+Patil+Road,+Pune+411001&output=embed"
  }
];

export default function ContactUs() {
  return (
    <>
      <Header />
      {/* Hero Section with extra top padding */}
      <section className="w-full bg-gradient-to-br from-[#fff7f0] to-white pt-32 pb-12 px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-playfair text-gray-900 mb-4 drop-shadow-sm animate-fade-in">Contact Us</h1>
        <p className="text-xl md:text-2xl text-gray-700 font-space-grotesk max-w-2xl mx-auto animate-fade-in delay-100">We'd love to hear from you. Reach out for business inquiries, partnerships, or just to say hello.</p>
      </section>

      {/* Office Locations with Maps */}
      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        {offices.map((office, idx) => (
          <Card key={idx} className="flex flex-col h-full p-0 rounded-3xl shadow-xl bg-white/90 border-0 overflow-hidden group hover:shadow-2xl transition-shadow">
            <div className="relative w-full h-48 md:h-56">
              <iframe
                src={office.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 'inherit' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={office.title + " Map"}
              />
              <div className="absolute left-4 top-4 bg-white/80 rounded-full px-4 py-1 text-[#b45f1d] font-bold font-playfair text-lg shadow-md">{office.title}</div>
            </div>
            <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
              <div>
                <div className="font-bold text-gray-900 mb-1 font-playfair text-xl md:text-2xl">{office.company || office.title}</div>
                <div className="mb-4 text-gray-700 font-space-grotesk text-base md:text-lg">
                  {office.address.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#b45f1d]" />
                  <a href={`tel:${office.phone}`} className="text-[#b45f1d] hover:underline font-semibold font-space-grotesk text-base md:text-lg">{office.phone}</a>
                </div>
                {office.fax && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold font-space-grotesk text-gray-700">Fax:</span>
                    <span className="font-space-grotesk text-base md:text-lg">{office.fax}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#b45f1d]" />
                  <a href={`mailto:${office.email}`} className="text-[#b45f1d] hover:underline font-semibold font-space-grotesk text-base md:text-lg">{office.email}</a>
                </div>
                {office.website && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold font-space-grotesk text-gray-700">Website:</span>
                    <a href={`https://${office.website}`} target="_blank" rel="noopener noreferrer" className="text-[#b45f1d] hover:underline font-space-grotesk text-base md:text-lg">{office.website}</a>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </main>
    </>
  );
} 