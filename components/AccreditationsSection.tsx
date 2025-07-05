import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AccreditationsSection() {
  return (
    <div className="space-y-8">
      <Card className="p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="relative h-[200px] flex justify-center">
            <Image
              src="/iso.jpg"
              alt="ISO Certifications"
              width={280}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Accreditations</h2>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-primary">ISO 9001:2015</p>
                <p className="text-lg font-semibold text-primary">ISO 14001:2015</p>
                <p className="text-lg font-semibold text-primary">BS OHSAS 18001:2007</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-700 leading-relaxed">
                We have been certified by BVQI, wherein the QMS. EMS & BS OHSAS systems have been combined.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Additional Information Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
          <h3 className="text-lg font-semibold mb-3">Quality Management System</h3>
          <p className="text-gray-600">
            ISO 9001:2015 certification demonstrates our commitment to consistent quality and customer satisfaction.
          </p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
          <h3 className="text-lg font-semibold mb-3">Environmental Management</h3>
          <p className="text-gray-600">
            ISO 14001:2015 certification showcases our dedication to environmental responsibility and sustainable practices.
          </p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <h3 className="text-lg font-semibold mb-3">Occupational Health & Safety</h3>
          <p className="text-gray-600">
            BS OHSAS 18001:2007 certification reflects our commitment to workplace safety and employee well-being.
          </p>
        </Card>
      </div>
    </div>
  );
} 