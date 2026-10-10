import deakinImage from "../assets/images/deakin.png";

function Hero() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden group">
      
      <img
        src={deakinImage}
        alt="Personal website banner"
        className="w-full h-full object-cover mx-auto"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gray-900/90 text-white py-4 px-6 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Hey, I'm Saneha
        </h1>
      </div>

    </section>
  );
}

export default Hero;