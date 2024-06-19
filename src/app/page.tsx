'use client'
import ContactUs from "@/components/contactComponent";
import Features from "@/components/features";
import HeroSection from "@/components/heroSection";
import Process from "@/components/process";
import Services from "@/components/services";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AboutComponent from "@/components/aboutComponent";

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <div className="mt-24 w-full">
      <HeroSection />
      <AboutComponent />
      <Services />
      <Process />
      <Features />
      <ContactUs />
    </div>
  );
}
