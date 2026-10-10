function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 px-6 bg-white flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-3xl font-bold mb-3 text-center">Contact Me</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        If you would like to get in touch, feel free to contact me.
      </p>
      <a
        href="mailto:example@deakin.edu.au"
        className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
      >
        Send Message
      </a>
    </section>
  );
}

export default Contact;
