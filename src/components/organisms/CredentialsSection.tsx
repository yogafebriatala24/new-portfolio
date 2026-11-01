import React from "react";
import { EDUCATION_LIST, CERTIFICATIONS, PUBLICATIONS } from "@/data/portfolioData";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-20 md:py-28 bg-slate-950/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Qualifications"
          title="Education, Certifications & Publications"
          subtitle="Landasan akademis, lisensi keahlian resmi, dan kontribusi publikasi ilmiah."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education & Publications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education Box */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Pendidikan Formal</h3>
                  <span className="text-xs text-slate-400">Gelar Sarjana Komputer</span>
                </div>
              </div>

              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {edu.institution}
                      </h4>
                      <p className="text-xs text-blue-400 font-medium">
                        {edu.degree}
                      </p>
                    </div>
                    <Badge variant="outline" size="sm">
                      IPK {edu.gpa}
                    </Badge>
                  </div>

                  <p className="text-xs font-mono text-slate-400">
                    {edu.period}
                  </p>
                  
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">
                        Aktivitas & Prestasi
                      </span>
                      {edu.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Publications */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Publikasi & Karya Tulis</h3>
                  <span className="text-xs text-slate-400">Jurnal Ilmiah & Artikel</span>
                </div>
              </div>

              <div className="space-y-4">
                {PUBLICATIONS.map((pub, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-purple-400 block mb-1">
                      {pub.platform} • {pub.date}
                    </span>
                    <h5 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      {pub.title}
                    </h5>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {pub.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Lisensi & Sertifikasi Profesional
                    </h3>
                    <span className="text-xs text-slate-400">
                      Standar Kompetensi Nasional & Kursus Khusus
                    </span>
                  </div>
                </div>
                <Badge variant="success" size="sm">
                  Verified
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-emerald-400">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {cert.period}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    <div className="pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                      {cert.skills}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
