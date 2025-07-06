import Header from "@/components/Header";
import ManagementTeam, { ManagementTeamHero } from "@/components/ManagementTeam";

export default function ManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ManagementTeamHero />
      <div className="max-w-7xl mx-auto px-4 mt-6 mb-12">
        <ManagementTeam />
      </div>
    </main>
  );
} 