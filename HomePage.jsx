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
      driver: "Become a Driver",
    },
    es: {
      title: "Entrega.food",
      subtitle: "Entrega.food entrega tus comidas favoritas rápido — de restaurantes locales confiables hasta tu puerta. Fresco, económico y siempre a tiempo.",
      orderNow: "Ordena Ahora",
      partner: "Sé un Socio",
      driver: "Conviértete en Repartidor",
    },
  };

  const tr = t[lang];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center" }}>
        <img src={logo} alt="Entrega Logo" style={{ maxWidth: "150px" }} />
        <h1>{tr.title}</h1>
        <p>{tr.subtitle}</p>
        <div style={{ margin: "20px 0" }}>
          <button style={{ margin: "5px" }}>{tr.orderNow}</button>
          <button style={{ margin: "5px" }}>{tr.partner}</button>
          <button style={{ margin: "5px" }}>{tr.driver}</button>
        </div>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <footer style={{ marginTop: "40px", fontSize: "14px" }}>
          <p>© 2025 Entrega.food. All rights reserved.</p>
          <div>
            <a href="https://facebook.com" style={{ margin: "0 10px" }}>Facebook</a>
            <a href="https://instagram.com" style={{ margin: "0 10px" }}>Instagram</a>
            <a href="https://wa.me" style={{ margin: "0 10px" }}>WhatsApp</a>
          </div>
        </footer>
      </header>
    </div>
  );
}
