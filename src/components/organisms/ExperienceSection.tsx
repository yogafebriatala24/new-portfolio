import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { ExperienceItem } from "@/components/molecules/ExperienceItem";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Briefcase } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Track Record"
          title="Professional Experience"
          subtitle="Perjalanan karir teknis dari pembangunan produk, arsitektur microservice, hingga kepemimpinan rekayasa perangkat lunak."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
