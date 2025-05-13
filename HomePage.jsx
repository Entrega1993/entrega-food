import Head from 'next/head';
import React, { useState } from 'react';
import logo from './logo.png';

export default function HomePage() {
  const [lang, setLang] = useState('en');

  const t = {
    en: {
      title: 'Entrega.food | Fresh & Local',
      subtitle: 'Entrega.food delivers your favorite meals fast — from trusted local restaurants to your door. Fresh, affordable, and always on time.',
      orderNow: 'Order Now',
      partner: 'Partner With Us',
      driver: 'Become a Driver',
    },
    es: {
      title: 'Entrega.food | Comida Rápida y Local',
      subtitle: 'Entrega.food entrega tus comidas favoritas — desde restaurantes locales directamente a tu puerta. Fresco, económico y siempre a tiempo.',
      orderNow: 'Ordena Ahora',
      partner: 'Sé un Socio',
      driver: 'Conviértete en Repartidor',
    },
  };

  const tr = t[lang];

  return (
    <>
      <Head>
        <title>{tr.title}</title>
        <meta name="description" content={tr.subtitle} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.entrega.food" />
      </Head>

      <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial' }}>
        <header>
          <img src={logo.src} alt="Entrega.food logo" style={{ width: 120 }} />
          <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ marginTop: 10 }}>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </header>

        <h1>{tr.title}</h1>
        <p style={{ maxWidth: 600, margin: 'auto' }}>{tr.subtitle}</p>

        <div style={{ marginTop: 20 }}>
          <a href="/order" style={buttonStyle}>{tr.orderNow}</a>
          <a href="/partner" style={buttonStyle}>{tr.partner}</a>
          <a href="/driver" style={buttonStyle}>{tr.driver}</a>
        </div>

        <footer style={{ marginTop: 30 }}>
          <p>&copy; 2025 Entrega.food. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

const buttonStyle = {
  display: 'inline-block',
  margin: '0 10px',
  padding: '10px 20px',
  background: '#d32f2f',
  color: '#fff',
  borderRadius: '4px',
  textDecoration: 'none',
};
