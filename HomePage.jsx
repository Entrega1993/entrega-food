import React, { useEffect, useState } from 'react';
import logo from './logo.png';

export default function HomePage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.title = "Entrega.food | Fresh & Fast Meals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entrega.food delivers your favorite meals from trusted local restaurants. Fast, fresh, and affordable.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Entrega.food delivers your favorite meals from trusted local restaurants. Fast, fresh, and affordable.';
      document.head.appendChild(meta);
    }
  }, []);

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
      subtitle: "Entrega.food entrega tus comidas favoritas rápido — desde restaurantes locales confiables a tu puerta. Fresco, económico y siempre a tiempo.",
      orderNow: "Ordena Ahora",
      partner: "Sé un Socio",
      driver: "Conviértete en Conductor",
    }
  };

  const tr = t[lang];

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <header>
        <img src={logo} alt="Entrega Logo" width="120" />
        <br />
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </header>
      <h1>{tr.title}</h1>
      <p>{tr.subtitle}</p>
      <div>
        <button>{tr.orderNow}</button>
        <button>{tr.partner}</button>
        <button>{tr.driver}</button>
      </div>
      <footer style={{ marginTop: '30px' }}>
        <p>© 2025 Entrega.food. All rights reserved.</p>
      </footer>
    </div>
  );
}
