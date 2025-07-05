import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Company Policy</h2>
          <p className="text-gray-600">[Company policies and guidelines here]</p>
        </Card>
      </div>
    </main>
  );
} 