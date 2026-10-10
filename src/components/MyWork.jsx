import projectImage1 from "../assets/images/projectimage1.png";
import projectImage2 from "../assets/images/projectimage2.png";
import projectImage3 from "../assets/images/projectimage3.png";

const projects = [
  {
    id: 1,
    image: projectImage1,
    title: "Restaurant Details Form",
    description:
      "This project features an HTML form where users enter restaurant information such as name, location, and cuisine type. Submitted data is automatically saved to a SQL database.",
  },
  {
    id: 2,
    image: projectImage2,
    title: "To-Do List",
    description:
      "A project where I built a simple to-do list app using HTML, CSS, and JavaScript to manage everyday tasks efficiently.",
  },
  {
    id: 3,
    image: projectImage3,
    title: "Simple LED Light Project",
    description:
      "A simple Arduino project that controls an LED light. The LED is connected to the Arduino and programmed to turn on and off.",
  },
];

function MyWork() {
  return (
    <section
      id="work"
      className="w-full py-16 px-6 flex flex-col items-center justify-center text-center"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-2">My Work</h2>
      </div>

      <div className="space-y-4 w-full max-w-3xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col sm:flex-row border border-slate-200 rounded-lg overflow-hidden bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:w-40 h-40 sm:h-auto object-cover"
            />

            <div className="flex flex-col items-center justify-center p-4 gap-2">
              <h3 className="text-2xl font-bold text-center">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyWork;