import Header from "@/components/Header";
import RegistrationsTable from "@/components/RegistrationsTable";
import PageHero from "@/components/PageHero";

export default function RegistrationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="Registrations" subtitle="Our accreditations and certifications" image="/registrations_hero/1.jpg" />
      <div className="max-w-7xl mx-auto px-4 mt-6 mb-12">
        <RegistrationsTable />
      </div>
    </main>
  );
} 