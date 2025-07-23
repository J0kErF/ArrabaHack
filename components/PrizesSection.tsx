import { Trophy } from "lucide-react";

export default function PrizeSection() {
  return (
    <section className="bg-orange-50 py-20 px-6" id="prize">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Trophy className="w-10 h-10 text-orange-500" />
          <h2 className="text-3xl font-bold text-orange-600 ml-2">
            Prizes & Rewards
          </h2>
        </div>

        <p className="text-gray-700 text-lg mb-10">
          We believe that creativity deserves recognition. At Arraba Hackathon, we’re rewarding the best minds with exciting prizes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">🥇 First Place</h3>
            <p className="text-gray-700 text-center text-lg">10,000 ₪</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">🥈 Second Place</h3>
            <p className="text-gray-700 text-center text-lg">6,000 ₪</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-orange-200">
            <h3 className="text-2xl font-bold text-orange-300 mb-2">🥉 Third Place</h3>
            <p className="text-gray-700 text-center text-lg">4,000 ₪</p>
          </div>
        </div>

        <p className="mt-10 text-gray-800 text-base font-medium">
          🎁 And that’s not all — many more surprises, gifts, and tech swag await participants!
        </p>
      </div>
    </section>
  );
}
