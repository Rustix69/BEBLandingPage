import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <ProfileSection />
      </div>
    </main>
  );
} 