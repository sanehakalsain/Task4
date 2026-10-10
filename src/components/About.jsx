import profilePic from "../assets/images/profilepic.png";

function About() {
  return (
    <section
      id="about"
      className="w-full max-w-4xl py-16 px-6 bg-white my-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center mx-auto"
    >
      <div className="flex justify-center items-center mb-6">
        <img
          src={profilePic}
          alt="Profile photo"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 mx-auto"
        />
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-2 text-center">
          About Me
        </h2>

        <p className="text-lg text-gray-600 font-medium mb-4 text-center">
          Student | Programmer | Web Developer
        </p>

        <hr className="w-16 border-t-2 border-blue-400 my-4 mx-auto" />

        <p className="text-gray-600 mb-4 text-center leading-relaxed">
          Hello! I'm Saneha, a student interested in technology,
          programming and web development.
        </p>

        <p className="text-gray-600 mb-6 text-center leading-relaxed">
          I enjoy learning new technologies and creating useful digital
          projects through my university studies and personal work.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-center">
          Here's what I've done so far
        </h3>

        <p className="text-gray-600 text-center leading-relaxed">
          I have worked on programming, web development, networking and
          other technology-based projects. I am continuously improving
          my skills and learning new technologies.
        </p>
      </div>
    </section>
  );
}

export default About;