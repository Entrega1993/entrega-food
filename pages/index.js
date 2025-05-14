import Head from 'next/head'; import React, { useState } from 'react'; import logo from '../logo.png';

export default function Home() { const [lang, setLang] = useState('en');

const t = { en: { title: 'Entrega.food', subtitle: 'Entrega.food delivers your favorite meals fast — from trusted local restaurants to your door. Fresh, affordable, and always on time.', orderNow: 'Order Now', partner: 'Partner With Us', driver: 'Become a Driver', }, es: { title: 'Entrega.food', subtitle: 'Entrega.food entrega tus comidas favoritas rápidamente — de restaurantes locales confiables a tu puerta. Fresco, económico y siempre a tiempo.', orderNow: 'Ordena Ahora', partner: 'Sé un Socio', driver: 'Conviértete en Conductor', }, };

const tr = t[lang];

return ( <div className="min-h-screen flex flex-col items-center justify-center text-center p-4"> <Head> <title>Entrega.food | Fresh & Fast Local Delivery</title> <meta name="description" content="Entrega.food delivers fresh meals from your local favorites fast and affordably." /> <meta name="robots" content="index, follow" /> <link rel="canonical" href="https://www.entrega.food" /> </Head>

<header className="flex flex-col items-center">
    <img src={logo.src} alt="Entrega.food Logo" className="w-32 h-auto mb-4" />
    <select value={lang} onChange={(e) => setLang(e.target.value)} className="border p-2 rounded mb-4">
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
    <h1 className="text-4xl font-bold mb-2">{tr.title}</h1>
    <p className="text-lg mb-4 max-w-xl">{tr.subtitle}</p>
    <div className="flex flex-wrap gap-2 justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">{tr.orderNow}</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">{tr.partner}</button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded">{tr.driver}</button>
    </div>
  </header>

  <footer className="mt-8 text-sm">
    <p>© 2025 Entrega.food. All rights reserved.</p>
    <div className="flex gap-4 mt-2">
      <a href="https://facebook.com" className="text-blue-700">Facebook</a>
      <a href="https://instagram.com" className="text-pink-500">Instagram</a>
      <a href="https://wa.me" className="text-green-600">WhatsApp</a>
    </div>
  </footer>
</div>

); }

 
