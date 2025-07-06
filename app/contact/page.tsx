import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
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
      "H. No.6-3-866/2, Greenlands, Begumpet Ameer Pet Rd, Hyderabad 500 016."
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
      "153, Bund Garden – Dhole Patil Road, Pune 411 001"
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
  return (
    <>
      <Header />
      <PageHero title="Contact Us" subtitle="Get in touch with our team" image="/contact_hero/1.jpg" />
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8 mb-16">
          {/* Head Office Card */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-[#b45f1d] overflow-hidden h-80">
            <div className="flex h-full">
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-[#b45f1d]" />
                    <span className="text-xl font-bold font-playfair text-gray-900">{headOffice.title}</span>
                    <span className="text-sm text-[#b45f1d] font-semibold">{headOffice.city}</span>
                  </div>
                  <div className="text-gray-700 text-base whitespace-pre-line leading-relaxed mb-4">
                    {headOffice.address.map((line, i) => <div key={i} className="text-base">{line}</div>)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#b45f1d]" />
                    <a href={`tel:${headOffice.phone}`} className="text-base text-[#b45f1d] font-medium hover:underline">{headOffice.phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#b45f1d]" />
                    <a href={`mailto:${headOffice.email}`} className="text-base text-[#b45f1d] font-medium hover:underline">{headOffice.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#b45f1d]" />
                    <a href={`https://${headOffice.website}`} target="_blank" rel="noopener noreferrer" className="text-base text-[#b45f1d] font-medium hover:underline">{headOffice.website}</a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 relative">
                <iframe
                  title="Head Office Map"
                  src={headOffice.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
                <div className="absolute top-2 right-2 bg-white/90 rounded-lg shadow p-2">
                  <a href={headOffice.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[#b45f1d] font-semibold hover:underline flex items-center gap-1 text-xs">
                    <MapPin className="w-3 h-3" />
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Regional & Branch Offices */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold font-playfair text-gray-900 text-center">Regional & Branch Offices</h2>
            <div className="grid grid-cols-2 gap-4">
              {[...offices, ...branches].map((office, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-80">
                  <div className="flex h-full">
                    <div className="flex-1 p-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-[#b45f1d]" />
                          <span className="text-sm font-bold font-playfair text-gray-900">{office.title}</span>
                          {hasCity(office) && (
                            <span className="text-xs text-gray-500 font-semibold">{office.city}</span>
                          )}
                        </div>
                        <div className="text-gray-700 text-base whitespace-pre-line leading-relaxed mb-4">
                          {office.address.map((line, i) => <div key={i} className="text-sm">{line}</div>)}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#b45f1d]" />
                          <a href={`tel:${office.phone}`} className="text-sm text-[#b45f1d] font-medium hover:underline">{office.phone}</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#b45f1d]" />
                          <a href={`mailto:${office.email}`} className="text-sm text-[#b45f1d] font-medium hover:underline">{office.email}</a>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <iframe
                        title={`${office.title} Map`}
                        src={office.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      ></iframe>
                      <div className="absolute top-1 right-1 bg-white/90 rounded shadow p-1">
                        <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[#b45f1d] font-semibold hover:underline flex items-center gap-1 text-xs">
                          <MapPin className="w-2 h-2" />
                          Map
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 