import React from "react";
import Hero from "../components/ui/Hero";
import Specials from "../components/ui/Specials";
import Testimonials from "../components/ui/Testimonials";
import About from "../components/ui/About";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section className="specials-section">
        <Specials />
      </section>

      <section className="testimonials">
        <Testimonials />
      </section>

      <section className="about-section">
        <About />
      </section>
    </>
  );
}
