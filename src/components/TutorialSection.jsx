import { tutorials } from "../data/data.js";
import TutorialCard from "./TutorialCard.jsx";

function TutorialSection() {
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center justify-center text-center bg-slate-50">
      <h2 className="text-3xl font-bold mb-10">Featured Tutorials</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>

      <button className="mt-10 border border-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition">
        See all tutorials
      </button>
    </section>
  );
}

export default TutorialSection;
