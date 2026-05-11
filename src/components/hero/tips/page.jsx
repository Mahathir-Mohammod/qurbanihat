import { Droplets, Apple, Stethoscope, ShieldCheck } from "lucide-react";

const tips = [
  {
    icon: <Stethoscope className="w-6 h-6 text-emerald-400" />,
    title: "Check Animal Health",
    description: "Always verify the animal's health certificate and ensure it has no visible signs of illness before purchasing.",
  },
  {
    icon: <Apple className="w-6 h-6 text-emerald-400" />,
    title: "Proper Nutrition",
    description: "Ensure the animal has been fed natural food and grass for at least 3 months before Qurbani.",
  },
  {
    icon: <Droplets className="w-6 h-6 text-emerald-400" />,
    title: "Clean Water Supply",
    description: "Animals should have access to clean water at all times. Dehydration affects meat quality.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Shariah Compliance",
    description: "Make sure the animal meets the minimum age and health requirements as per Islamic guidelines.",
  },
];

const QurbaniTips = () => {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Be Prepared
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Qurbani Tips
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Follow these essential tips to ensure a proper and blessed Qurbani experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-gray-950 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                {tip.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;