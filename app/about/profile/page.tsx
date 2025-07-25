import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import PageHero from "@/components/PageHero";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero title="Company Profile" subtitle="Learn more about our legacy and values" image="/about_profile_hero/1.jpg" />
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <ProfileSection />
      </div>
    </main>
  );
} 