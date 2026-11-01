import React from "react";
import { SKILLS_LIST } from "@/data/portfolioData";
import { SkillPill } from "@/components/atoms/SkillPill";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Code2, Server, Cpu, Wrench } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      title: "Frontend & Web Ecosystem",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      items: SKILLS_LIST.filter((s) => s.category === "frontend"),
    },
    {
      title: "Backend, Data & Microservices",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      items: SKILLS_LIST.filter((s) => s.category === "backend"),
    },
    {
      title: "Architecture, Systems & Network",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      items: SKILLS_LIST.filter((s) => s.category === "architecture"),
    },
    {
      title: "Design Systems & DevOps Tools",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      items: SKILLS_LIST.filter((s) => s.category === "tools"),
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Skills & Technical Arsenal"
          subtitle="Teknologi dan metodologi arsitektur yang saya gunakan untuk membangun sistem yang andal dan terukur."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  {cat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.items.map((skill, sIdx) => (
                  <SkillPill
                    key={sIdx}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
