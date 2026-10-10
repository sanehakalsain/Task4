import { articles } from "../data/data.js";
import ArticleCard from "./ArticleCard.jsx";

function ArticleSection() {
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center justify-center text-center bg-white">
      <h2 className="text-3xl font-bold mb-10">Featured Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <button className="mt-10 border border-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition">
        See all articles
      </button>
    </section>
  );
}

export default ArticleSection;
