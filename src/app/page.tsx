"use client";

import Image from "next/image";
import Section from "@/components/section";
import Navbar from "@/components/navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Section />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
