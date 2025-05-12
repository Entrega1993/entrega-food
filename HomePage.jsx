import React, { useState } from "react";
import logo from "./logo.png";

export default function HomePage() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      title: "Entrega.food",
      subtitle:
        "Entrega.food delivers your favorite meals fast — from trusted local restaurants to your door. Fresh, affordable, and always on time.",
      orderNow: "Order Now",
      partner: "Partner With Us",
      driver: "Become a Driver",
    },
    es: {
      title: "Entrega.food",
      subtitle:
        "Entrega.food entrega tus comidas favoritas rápidamente, desde restaurantes locales de confianza hasta tu puerta. Fresco, económico y siempre a tiempo.",
      orderNow: "Ordena Ahora",
      partner: "Sé un Socio",
      driver: "Conviértete en Repartidor",
    },
  };

  const tr = t[lang];

  return (
    <div className="min-h-screen bg-white text-center p-6">
      <header className="flex flex-col items-center mb-6">
        <img src={logo} alt="Entrega Logo" className="w-32 h-32 mb-4" />
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 text-sm"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </header>

      <main className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{tr.title}</h1>
        <p className="text-lg mb-6">{tr.subtitle}</p>

        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a
            href="#order"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {tr.orderNow}
          </a>
          <a
            href="#partner"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {tr.partner}
          </a>
          <a
            href="#driver"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            {tr.driver}
          </a>
        </div>

        <footer className="text-sm text-gray-500">
          <p className="mb-2">
            © 2025 Entrega.food. All rights reserved.
          </p>
          <div className="flex gap-3 justify-center">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              WhatsApp
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

<div className="min-h-screen bg-white text-center p-6">
  <header>...</header>

  <main>...</main>

  {/* Contact form section */}
  <section className="mt-10" id="contact">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <ContactForm />
  </section>

  <footer>...</footer>
</div>
