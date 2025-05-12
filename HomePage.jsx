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
    },<form
  action="https://formspree.io/f/mdkglrpb"
  method="POST"
  style={{ maxWidth: "400px", margin: "30px auto", textAlign: "left" }}
>
  <h2>Contact Us</h2>
  <label>
    Name:
    <input type="text" name="name" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
  </label>
  <label>
    Email:
    <input type="email" name="_replyto" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
  </label>
  <label>
    Message:
    <textarea name="message" rows="4" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }}></textarea>
  </label>
  <button type="submit" style={{ backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px" }}>
    Send
  </button>
</form>
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
          <button style={{ margin<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "20px 0" }}>
  <a href="/order" style={{
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold"
  }}>
    {tr.orderNow}
  </a>
  <a href="/partner" style={{
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold"
  }}>
    {tr.partner}
  </a>
  <a href="/driver" style={{
    backgroundColor: "#ffc107",
    color: "#000",
    padding: "12px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold"
  }}>
    {tr.driver}
  </a>
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
