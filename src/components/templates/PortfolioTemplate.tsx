import React from "react";
import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { SkillsSection } from "@/components/organisms/SkillsSection";
import { CredentialsSection } from "@/components/organisms/CredentialsSection";
import { OrganizationSection } from "@/components/organisms/OrganizationSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Footer } from "@/components/organisms/Footer";

export const PortfolioTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white" id="top">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CredentialsSection />
        <OrganizationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
