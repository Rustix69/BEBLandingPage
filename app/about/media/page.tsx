import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Media</h2>
          <p className="text-gray-600">[Media coverage and press releases here]</p>
        </Card>
      </div>
    </main>
  );
} 