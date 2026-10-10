function TutorialCard({ tutorial }) {
  return (
    <div className="flex flex-col border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <img src={tutorial.image} alt={tutorial.title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col gap-2 text-left">
        <h3 className="text-xl font-bold">{tutorial.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{tutorial.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
          <span> {tutorial.rating}</span>
          <span>{tutorial.author}</span>
        </div>
      </div>
    </div>
  );
}

export default TutorialCard;
