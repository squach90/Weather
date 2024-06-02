// app/page.tsx
"use client";

import LandingPage from './_landing';
import Hero from './_landing/Hero';
import { Analytics } from '@vercel/analytics/react';
import { NavBar } from './_landing/NavBar';

export default function Page() {
  return (
    <main>
      <Hero />
      <LandingPage />
      <NavBar />
      <Analytics />
    </main>
  );
}
