"use client";

import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Modalities from "./components/Modalities";
import Gastrobar from "./components/Gastrobar";
import SocialFeed from "./components/SocialFeed";
import Location from "./components/Location";

export default function App() {
  return (
      <main className="min-h-screen font-sans selection:bg-beach-sunset selection:text-white">
        <Hero />
        <Highlights />
        <Features />
        <Modalities />
        <Gastrobar />
        <SocialFeed />
        <Location />
      </main>
  );
}
