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
      driver: "Become a Driver",
    },
    es: {
      title: "Entrega.food",
      subtitle: "Entrega.food entrega tus comidas favoritas rápidamente — de restaurantes locales confiables a tu puerta. Fresco, accesible y siempre a tiempo.",
      orderNow: "
