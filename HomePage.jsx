import React from "react";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-center p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Entrega.food</h1>
        <p className="text-lg text-gray-700">
          Delivering meals from your favorite restaurants — fast, affordable, and local.
        </p>
      </header>

      <main>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="#order" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Order Now
          </a>
          <a href="#partner" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Partner With Us
          </a>
          <a href="#driver" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Become a Driver
          </a>
        </div>

        {/* Contact Form Section */}
        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="mt-10 text-sm text-gray-500">
        <p>© 2025 Entrega.food. All rights reserved.</p>
      </footer>
    </div>
  );
}