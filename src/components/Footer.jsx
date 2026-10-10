function Footer() {
  return (
    <footer className="w-full">

      {/* Newsletter section */}
      <div className="w-full bg-gray-200 px-6 py-3">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          <label className="font-bold text-gray-900 text-lg whitespace-nowrap">
            SIGN UP FOR OUR DAILY INSIDER
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 h-8 px-3 bg-white border border-gray-500 text-gray-900 text-sm focus:outline-none"
          />

          <button
            type="submit"
            className="h-8 px-5 bg-gray-300 border border-gray-500 text-gray-900 text-sm hover:bg-gray-400 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Main footer */}
      <div className="w-full bg-teal-500 text-gray-900 px-6 py-5">

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Explore */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Explore
            </h3>

            <ul className="space-y-1 text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:underline">
                  Questions
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Articles
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Support
            </h3>

            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Stay Connected
            </h3>

            <div className="flex gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-lg hover:bg-gray-200"
              >
                f
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-sm hover:bg-gray-200"
              >
                X
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-sm hover:bg-gray-200"
              >
                ◎
              </a>

            </div>
          </div>

        </div>

        {/* Bottom section */}
        <div className="max-w-5xl mx-auto text-center mt-7">

          <p className="font-bold text-lg">
            DEV@Deakin 2026
          </p>

          <div className="flex justify-center gap-10 mt-2 text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>

            <a href="#" className="hover:underline">
              Terms
            </a>

            <a href="#" className="hover:underline">
              Code of Conduct
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;