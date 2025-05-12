import React, { useState } from "react";
import logo from "./logo.png";

export default function HomePage() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      title: "Entrega.food",
      subtitle: "Entrega.food delivers your favorite meals fast — from trusted local restaurants to your door. Fresh, affordable, and always on time.",
      orderNow: "Order Now",
      partner: "Partner With Us",
      driver: "Become a Driver"
    },
    es: {
      title: "Entrega.food",
      subtitle: "Entrega.food entrega tus comidas favoritas rápido — de restaurantes locales confiables hasta tu puerta. Fresco, económico y siempre puntual.",
      orderNow: "Ordena Ahora",
      partner: "Sé un Socio",
      driver: "Conviértete en Repartidor"
    }
  };

  const tr = t[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <img src={logo} alt="Entrega.food logo" className="h-10" />
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </header>

      <main className="text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{tr.title}</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">{tr.subtitle}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-green-600 text-white px-6 py-2 rounded-xl font-semibold shadow">{tr.orderNow}</button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded-xl font-semibold">{tr.partner}</button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded-xl font-semibold">{tr.driver}</button>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8 border-t">
        &copy; {new Date().getFullYear()} Entrega.food. All rights reserved.
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://facebook.com/entregafood" target="_blank" className="text-blue-600 hover:underline">Facebook</a>
          <a href="https://instagram.com/entrega.food" target="_blank" className="text-pink-600 hover:underline">Instagram</a>
          <a href="https://wa.me/1234567890" target="_blank" className="text-green-600 hover:underline">WhatsApp</a>
        </div>

      </footer>
    </div>
  );
}
<form
  action="https://formspree.io/f/mdkglrpb"
  method="POST"
  style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "30px auto", gap: "10px" }}
>
  <label>
    Your Name:
    <input type="text" name="name" required />
  </label>
  <label>
    Your Email:
    <input type="email" name="email" required />
  </label>
  <label>
    Message:
    <textarea name="message" rows="5" required></textarea>
  </label>
  <button type="submit">Send</button>
</form>
