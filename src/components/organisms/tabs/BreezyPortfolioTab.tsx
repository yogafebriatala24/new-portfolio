"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS as STATIC_PROJECTS, Project } from "@/data/portfolioData";
import { ExternalLink, Layers, X } from "lucide-react";
import { GithubIcon } from "@/components/atoms/SocialIcons";

export const BreezyPortfolioTab: React.FC = () => {
  const [projectsList, setProjectsList] = useState<Project[]>(STATIC_PROJECTS);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Fetch dynamic projects from API if available
  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjectsList(data);
        }
      })
      .catch((err) => console.log("Using static projects fallback"));
  }, []);

  const filters = ["All", "Full Stack", "UI/UX & App Design", "System / Web App"];

  const filtered =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title & Filters */}
      <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white breezy-title-heading">
            Portfolio
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Showcase of web platforms, system architectures, and UI/UX design prototypes.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs px-3.5 py-1.5 rounded-full transition-all ${
                activeFilter === f
                  ? "bg-[#0ba376] text-white font-bold shadow-md"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((proj, idx) => (
          <div
            key={proj.id || idx}
            onClick={() => setSelectedProject(proj)}
            className="group cursor-pointer rounded-2xl bg-[#22252c] border border-white/5 overflow-hidden hover:border-[#0ba376]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image Preview */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <Image
                src={proj.image || "/img/Foto.png"}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22252c] via-transparent to-transparent opacity-80" />

              <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0ba376] text-white shadow">
                {proj.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-base font-bold text-white group-hover:text-[#0ba376] transition-colors mb-2 line-clamp-1">
                {proj.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {proj.tags?.slice(0, 3).map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#22252c] border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#0ba376] block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 custom-scrollbar">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                <Image
                  src={selectedProject.image || "/img/Foto.png"}
                  alt={selectedProject.title}
                  fill
                  sizes="640px"
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Project Description
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.details || selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags?.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-[#1c1e24] flex items-center justify-end gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Source Code
                </a>
              )}
              {selectedProject.prototypeUrl && (
                <a
                  href={selectedProject.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5" />
                  View Prototype
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-full bg-[#0ba376] hover:bg-[#088b64] text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
