'use client'
import AboutUs from "@/components/aboutUs";
import ContactUs from "@/components/contactUs";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import Process from "@/components/process";
import ScrollToTopButton from "@/commonComponents/ScrollToTopButton";
import Services from "@/components/services";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="mt-24 w-full">
        <HeroSection />
        <AboutUs />
        <Services />
        <Process />
        <Features />
        <ContactUs />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
