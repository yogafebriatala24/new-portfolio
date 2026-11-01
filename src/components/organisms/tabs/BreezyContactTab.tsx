"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MapPin, Phone, Mail, CheckCircle, Send } from "lucide-react";

export const BreezyContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link as fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || "Collaboration Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Title */}
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-3xl font-extrabold text-white breezy-title-heading">
          Contact
        </h2>
        <p className="text-xs text-slate-400 mt-2">
          Feel free to reach out for software engineering roles, technical architecture consultation, or collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Info Blocks (4 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Location Block */}
          <div className="p-5 rounded-2xl bg-[#22252c] border border-white/5 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#0ba376]/20 text-[#0ba376] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                Location
              </span>
              <h4 className="text-sm font-bold text-white">
                {PERSONAL_INFO.location}
              </h4>
              <p className="text-xs text-emerald-400 mt-1 font-medium">
                Available for Remote & On-Site
              </p>
            </div>
          </div>

          {/* Email Block */}
          <div className="p-5 rounded-2xl bg-[#22252c] border border-white/5 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#0ba376]/20 text-[#0ba376] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-bold text-white hover:text-[#0ba376] transition-colors truncate block"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Phone / WhatsApp Block */}
          <div className="p-5 rounded-2xl bg-[#22252c] border border-white/5 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#0ba376]/20 text-[#0ba376] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                Phone & WhatsApp
              </span>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-white hover:text-[#0ba376] transition-colors"
              >
                +62 856 9394 1455
              </a>
            </div>
          </div>

          {/* Availability Block */}
          <div className="p-5 rounded-2xl bg-[#22252c] border border-white/5 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#0ba376]/20 text-[#0ba376] shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                Status
              </span>
              <h4 className="text-sm font-bold text-emerald-400">
                #OPENTOWORK 2026
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Full-Time & High-Impact Contracts
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#22252c] border border-white/5">
          <h3 className="text-xl font-bold text-white mb-2">
            How Can I Help You?
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Kirimkan pesan Anda langsung melalui formulir di bawah ini.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0ba376] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0ba376] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1.5">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Software Engineering Collaboration / Hiring"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0ba376] transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Halo Yoga, kami tertarik untuk mendiskusikan..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0ba376] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#0ba376] hover:bg-[#088b64] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0ba376]/25 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>

            {submitted && (
              <p className="text-xs text-emerald-400 mt-2 font-medium">
                Membuka aplikasi email Anda untuk mengirim pesan langsung...
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
