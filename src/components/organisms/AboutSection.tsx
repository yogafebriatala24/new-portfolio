import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, BookOpen, Layers, Terminal, Sparkles } from "lucide-react";
import { PERSONAL_INFO, WORK_VALUES } from "@/data/portfolioData";
import { SectionHeading } from "@/components/molecules/SectionHeading";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Profile & Philosophy"
          title="Bridging Engineering Excellence with Business Impact"
          subtitle="Menggabungkan kedalaman teknis arsitektur perangkat lunak modern dengan kelincahan kepemimpinan organisasi."
        />

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Story Box (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-300 text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Background & Expertise
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Software Engineer berbasis di Kabupaten Bogor dengan minat mendalam pada performa web dan sistem terdistribusi.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                Memulai perjalanan pengembangan web sejak tahun 2017, saya telah bertransformasi dari praktisi web development menjadi engineer yang berfokus pada arsitektur sistem skala besar: dari perancangan micro-frontend independen, backend pembayaran konkurensi tinggi berbasis Rust, hingga sistem pemantauan jaringan telekomunikasi berlatensi rendah di Telkom Indonesia.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Selain kemampuan teknis, rekam jejak saya sebagai Ketua Umum HMI Komfaktek dan peran aktif di berbagai organisasi kepemudaan membekali saya dengan kapasitas negosiasi teknis, manajemen krisis, dan empati kepemimpinan tim cross-functional.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-slate-500 font-mono block">Lokasi Domisili</span>
                <span className="text-sm font-semibold text-slate-200">Kabupaten Bogor, Jawa Barat</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">Status Karir</span>
                <span className="text-sm font-semibold text-emerald-400">Terbuka untuk Peluang Baru</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 font-mono block">Fokus Saat Ini</span>
                <span className="text-sm font-semibold text-blue-400">Next.js, Rust & Micro-frontend</span>
              </div>
            </div>
          </div>

          {/* Sidecard: Visual / Highlights (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/20 via-slate-900/50 to-slate-950 border border-blue-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Full-Stack Core</h4>
                  <p className="text-xs text-slate-400">Modern Web Platform & Systems</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Spesialisasi mencakup Next.js App Router, TypeScript, arsitektur Micro-frontend (MFE), PWA luring (*offline-first*), layanan mikro Rust/Axum, dan integrasi headless CMS dengan standar Core Web Vitals tinggi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Standarisasi & Sertifikasi</h4>
                  <p className="text-xs text-slate-400">BNSP RI & Finalis Gemastik XIII</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                Memegang sertifikasi resmi negara (BNSP) untuk kompetensi Programmer dan Web Developer. Berpengalaman mewakili kampus pada ajang bergengsi nasional Gemastik XIII dalam pengembangan software edukasi.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Standar Kualitas Kode Terverifikasi
              </div>
            </div>
          </div>
        </div>

        {/* Why Hire Me / Working Principles */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Core Values: Mengapa Berkolaborasi dengan Saya?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-200"
              >
                <div className="relative w-12 h-12 mb-4">
                  <Image
                    src={val.icon}
                    alt={val.title}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
