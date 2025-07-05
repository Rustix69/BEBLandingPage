import Header from "@/components/Header";
import ManagementTeam from "@/components/ManagementTeam";

export default function ManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <ManagementTeam />
      </div>
    </main>
  );
} 