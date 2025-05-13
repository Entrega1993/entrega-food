import Head from 'next/head';
import React, { useState } from 'react';
import logo from './logo.png';

export default function HomePage() {
  const [lang, setLang] = useState('en');
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
      subtitle: "Entrega.food entrega tus comidas favoritas rápidamente — de restaurantes locales de confianza a tu puerta. Fresco, económico y siempre puntual.",
      orderNow: "Ordena Ahora",
      partner: "Sé un Socio",
      driver: "Conviértete en Conductor"
    }
  };
  const tr = t[lang];

  return (
    <div>
      <Head>
        <title>{tr.title}</title>
        <meta name="description" content={tr.subtitle} />
      </Head>
      <header>
        <img src={logo} alt="Entrega.food Logo" width="120" />
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </header>
      <main>
        <h1>{tr.title}</h1>
        <p>{tr.subtitle}</p>
        <button>{tr.orderNow}</button>
        <button>{tr.partner}</button>
        <button>{tr.driver}</button>
      </main>
    </div>
  );
}   
