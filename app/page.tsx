// app/page.tsx
"use client";

import LandingPage from './_landing';
import Hero from './_landing/Hero';
import { NavBar } from './_landing/NavBar';

export default function Page() {
  return (
    <main>
      <Hero />
      <LandingPage />
      <NavBar />
      
    </main>
  );
}
