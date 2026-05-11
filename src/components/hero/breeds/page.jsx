import data from "../../../../public/data.json";
import { GiCow, GiGoat, GiSheep, GiCamel, GiBuffaloHead } from "react-icons/gi";

const breedMap = {};
data.forEach((animal) => {
  if (!breedMap[animal.breed]) {
    breedMap[animal.breed] = { breed: animal.breed, type: animal.type, count: 0 };
  }
  breedMap[animal.breed].count += 1;
});
const topBreeds = Object.values(breedMap).slice(0, 6);

const getIcon = (type) => {
  if (type === "Cow") return <GiCow className="w-6 h-6 text-emerald-400" />;
  if (type === "Goat") return <GiGoat className="w-6 h-6 text-emerald-400" />;
  if (type === "Sheep") return <GiSheep className="w-6 h-6 text-emerald-400" />;
  if (type === "Camel") return <GiCamel className="w-6 h-6 text-emerald-400" />;
  return <GiBuffaloHead className="w-6 h-6 text-emerald-400" />;
};

const TopBreeds = () => {
  return (
    <section className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Popular Choices
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Top Breeds
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Explore the most popular breeds available for Qurbani this season.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {topBreeds.map((item) => (
            <div
              key={item.breed}
              className="bg-gray-900 border border-white/10 rounded-2xl p-5 text-center hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer group">

              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition-all duration-200">
                {getIcon(item.type)}
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                {item.breed}
              </h3>
              <p className="text-emerald-400 text-xs font-medium">
                {item.type}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {item.count} available
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;