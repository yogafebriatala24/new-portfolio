"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Layers, X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { GithubIcon } from "@/components/atoms/SocialIcons";

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "UI/UX & App Design", "System / Web App"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-950/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            label="Selected Works"
            title="Projects & Architecture Portfolio"
            subtitle="Kombinasi karya antarmuka digital interaktif, platform aplikasi web skala penuh, dan sistem administrasi organisasi."
            className="mb-0"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-blue-400 block mb-1">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono text-slate-400 mb-2">
                  Deskripsi Proyek
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.details || activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono text-slate-400 mb-2">
                  Teknologi & Pendekatan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t, idx) => (
                    <Badge key={idx} variant="default" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-end gap-3">
              {activeModalProject.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  href={activeModalProject.githubUrl}
                  external
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  Source Code
                </Button>
              )}
              {activeModalProject.prototypeUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  href={activeModalProject.prototypeUrl}
                  external
                  icon={<Layers className="w-4 h-4" />}
                >
                  View Prototype
                </Button>
              )}
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveModalProject(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
