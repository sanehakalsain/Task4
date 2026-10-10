import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("blue");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("Subscribing...");
    setMessageColor("blue");

    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setMessageColor("green");
        setEmail("");
      } else {
        setMessage(data.message);
        setMessageColor("red");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to the server. Please try again.");
      setMessageColor("red");
    }
  };

  return (
    <section
      id="subscribe"
      className="w-full py-16 px-6 bg-blue-50 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-3"> UP FOR OUR DAILY INSIDERS</h2>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p className="mt-4 font-medium" style={{ color: messageColor }}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Subscribe;
