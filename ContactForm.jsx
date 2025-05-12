import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/mdkglrpb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="bg-white max-w-md mx-auto p-6 rounded-lg shadow">
      {submitted ? (
        <div className="text-green-700 font-semibold text-center">
          Thank you! We received your message.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </label>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}