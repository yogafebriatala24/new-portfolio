import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/atoms/Button";
import {
  Mail,
  MessageSquare,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/atoms/SocialIcons";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900/70 border border-slate-700/80 shadow-2xl backdrop-blur-xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-300 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Let&apos;s Build Something Resilient
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Interested in Working Together?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
            Saya terbuka untuk diskusi kolaborasi teknik, posisi full-time / kontrak Software Engineer, maupun konsultasi arsitektur web modern.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-950 transition-all flex items-center gap-3.5 group text-left"
            >
              <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/60 hover:bg-slate-950 transition-all flex items-center gap-3.5 group text-left"
            >
              <div className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Direct WhatsApp</span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  +62 856 9394 1455
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry%20-%20Yoga%20Febriatala`}
              icon={<Send className="w-4 h-4" />}
            >
              Send an Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={PERSONAL_INFO.cvUrl}
              external
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Download Full CV
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-mono pt-6 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              {PERSONAL_INFO.shortLocation}
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Available for Work</span>
          </div>
        </div>
      </div>
    </section>
  );
};
