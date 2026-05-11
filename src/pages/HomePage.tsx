// src/pages/HomePage.tsx
import { CtaBanner } from "../components/sections/CtaBanner";
import { Hero } from "../components/sections/Hero";
import { Philosophy } from "../components/sections/Philosophy";
import { Process } from "../components/sections/Process";
import { Services } from "../components/sections/Services";
import { SignatureWork } from "../components/sections/SignatureWork";
import { Stats } from "../components/sections/Stats";
import { Testimonials } from "../components/sections/Testimonials";
// ... import other sections used on the home page

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureWork />
      <Philosophy />
      <Services />
      <Stats />
      <Testimonials />
      <CtaBanner />
      <Process />
    </>
  );
}
