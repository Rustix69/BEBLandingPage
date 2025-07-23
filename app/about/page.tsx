"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import ProfileSection from "@/components/ProfileSection";
import ManagementTeam from "@/components/ManagementTeam";
import AccreditationsSection from "@/components/AccreditationsSection";
import Header from "@/components/Header";

const tabItems = [
  { value: "profile", label: "Profile" },
  { value: "management", label: "Management Team" },
  { value: "media", label: "Media" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <Tabs defaultValue="profile" className="w-full">
          {/* Tab Navigation (not sticky) */}
          <div className="bg-white z-10 border-b">
            <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
              <TabsList className="h-auto inline-flex w-full gap-2 p-1">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="px-4 py-2.5 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white rounded-md"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Tab Content with Padding */}
          <div className="py-8">
            <TabsContent value="profile">
              <ProfileSection />
            </TabsContent>

            <TabsContent value="management">
              <ManagementTeam />
            </TabsContent>

            <TabsContent value="media">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Media</h2>
                <p className="text-gray-600">
                  [Media coverage and press releases here]
                </p>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
} 