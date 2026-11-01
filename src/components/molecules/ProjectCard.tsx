import React from "react";
import Image from "next/image";
import { ExternalLink, Layers } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { GithubIcon } from "@/components/atoms/SocialIcons";

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
}) => {
  return (
    <div className="group relative flex flex-col bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950/80 border-b border-slate-800/80">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="accent" size="sm">
            {project.category}
          </Badge>
        </div>

        {project.period && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-mono text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700/50">
              {project.period}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 mb-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 border border-slate-700/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 mt-auto">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.githubUrl}
              external
              icon={<GithubIcon className="w-3.5 h-3.5" />}
              className="flex-1 text-xs"
            >
              Source Code
            </Button>
          )}

          {project.prototypeUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.prototypeUrl}
              external
              icon={<Layers className="w-3.5 h-3.5" />}
              className="flex-1 text-xs"
            >
              Prototype
            </Button>
          )}

          {project.demoUrl && (
            <Button
              variant="primary"
              size="sm"
              href={project.demoUrl}
              external
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              className="flex-1 text-xs"
            >
              Live Demo
            </Button>
          )}

          {onOpenDetails && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenDetails(project)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
