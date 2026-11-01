"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Lock,
  Database,
  Plus,
  Trash2,
  Edit2,
  Save,
  RefreshCw,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Layers,
  User,
  Upload,
  Loader2,
} from "lucide-react";

export default function AdminPage() {
  const [token, setToken] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"projects" | "experiences" | "profile">("projects");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Data states
  const [projects, setProjects] = useState<any[]>([]);
  const [experiences, setExperiences] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Editing state for Project modal / form
  const [editingProject, setEditingProject] = useState<any | null>(null);
  const [editingExperience, setEditingExperience] = useState<any | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("yoga_admin_token");
    if (savedToken) {
      setToken(savedToken);
      fetchData(savedToken);
    }
  }, []);

  const showMsg = (text: string, type: "success" | "error" = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        localStorage.setItem("yoga_admin_token", data.token);
        fetchData(data.token);
      } else {
        setAuthError(data.error || "Password salah!");
      }
    } catch (err) {
      setAuthError("Gagal autentikasi.");
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("yoga_admin_token");
  };

  const fetchData = async (authToken = token) => {
    setLoading(true);
    try {
      const [projRes, expRes, profRes] = await Promise.all([
        fetch("/api/projects"),
        fetch("/api/experiences"),
        fetch("/api/profile"),
      ]);
      const [projData, expData, profData] = await Promise.all([
        projRes.json(),
        expRes.json(),
        profRes.json(),
      ]);
      setProjects(projData);
      setExperiences(expData);
      setProfile(profData);
    } catch (err) {
      showMsg("Gagal memuat data dari API", "error");
    } finally {
      setLoading(false);
    }
  };

  // Upload image directly to Cloudinary
  const handleUploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    targetField: "project" | "profile" | "experience"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.url) {
        showMsg("Gambar/Logo berhasil di-upload ke Cloudinary!");
        if (targetField === "project" && editingProject) {
          setEditingProject({ ...editingProject, image: data.url });
        } else if (targetField === "profile" && profile) {
          setProfile({ ...profile, image: data.url });
        } else if (targetField === "experience" && editingExperience) {
          setEditingExperience({ ...editingExperience, companyLogo: data.url });
        }
      } else {
        showMsg(data.error || "Gagal upload gambar", "error");
      }
    } catch (err) {
      showMsg("Kesalahan koneksi upload", "error");
    } finally {
      setUploading(false);
    }
  };

  const handleSeedDatabase = async () => {
    if (!confirm("Import seluruh data awal portofolio ke MongoDB Atlas? Data lama di DB akan ditimpa.")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/seed", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        showMsg("Berhasil melakukan seed database!");
        fetchData();
      } else {
        showMsg(data.error || "Gagal seed database", "error");
      }
    } catch (err) {
      showMsg("Terjadi kesalahan koneksi", "error");
    } finally {
      setLoading(false);
    }
  };

  // Save Project
  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;
    try {
      const isEdit = !!editingProject._id;
      const res = await fetch("/api/projects", {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editingProject),
      });
      const data = await res.json();
      if (res.ok) {
        showMsg(`Project berhasil ${isEdit ? "diperbarui" : "dibuat"}!`);
        setEditingProject(null);
        fetchData();
      } else {
        showMsg(data.error || "Gagal menyimpan project", "error");
      }
    } catch (err) {
      showMsg("Gagal menyimpan data", "error");
    }
  };

  // Delete Project
  const handleDeleteProject = async (id: string) => {
    if (!confirm("Yakin ingin menghapus project ini?")) return;
    try {
      const res = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        showMsg("Project berhasil dihapus");
        fetchData();
      } else {
        showMsg("Gagal menghapus", "error");
      }
    } catch (err) {
      showMsg("Kesalahan koneksi", "error");
    }
  };

  // Save Experience
  const handleSaveExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExperience) return;
    try {
      const isEdit = !!editingExperience._id;
      const res = await fetch("/api/experiences", {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editingExperience),
      });
      const data = await res.json();
      if (res.ok) {
        showMsg(`Experience berhasil ${isEdit ? "diperbarui" : "dibuat"}!`);
        setEditingExperience(null);
        fetchData();
      } else {
        showMsg(data.error || "Gagal menyimpan experience", "error");
      }
    } catch (err) {
      showMsg("Gagal menyimpan data", "error");
    }
  };

  // Delete Experience
  const handleDeleteExperience = async (id: string) => {
    if (!confirm("Yakin ingin menghapus pengalaman ini?")) return;
    try {
      const res = await fetch(`/api/experiences?id=${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        showMsg("Experience berhasil dihapus");
        fetchData();
      } else {
        showMsg("Gagal menghapus", "error");
      }
    } catch (err) {
      showMsg("Kesalahan koneksi", "error");
    }
  };

  // Save Profile
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      });
      if (res.ok) {
        showMsg("Data profil berhasil diperbarui!");
        fetchData();
      } else {
        showMsg("Gagal menyimpan profil", "error");
      }
    } catch (err) {
      showMsg("Kesalahan koneksi", "error");
    }
  };

  // Login View
  if (!token) {
    return (
      <div className="min-h-screen bg-[#1f2229] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#272a33] border border-white/10 shadow-2xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#0ba376]/20 text-[#0ba376] border border-[#0ba376]/30 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-white mb-2">Yoga Portfolio CMS</h1>
          <p className="text-xs text-slate-400 mb-6">
            Masuk untuk mengelola data projects, experiences & profile terhubung MongoDB & Cloudinary.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                required
                placeholder="Admin Password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0ba376]"
              />
            </div>
            {authError && <p className="text-xs text-rose-400 text-left">{authError}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#0ba376] hover:bg-[#088b64] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0ba376]/20 transition-all"
            >
              Login ke Dashboard
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10">
            <Link href="/" className="text-xs text-slate-400 hover:text-white flex items-center justify-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke Portfolio Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1f2229] text-slate-200">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#272a33] border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-base font-extrabold text-white">Portfolio Admin Dashboard</h1>
            <span className="text-[11px] text-[#0ba376] font-mono">MongoDB Atlas & Cloudinary Enabled</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSeedDatabase}
            className="px-3.5 py-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-semibold flex items-center gap-2"
            title="Isi database dengan data portofolio awal"
          >
            <Database className="w-4 h-4" />
            Seed Default Data
          </button>
          <button
            onClick={() => fetchData()}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-xl bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 border border-rose-500/30 text-xs font-semibold"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Alert toast */}
      {message && (
        <div
          className={`fixed top-20 right-6 z-50 p-4 rounded-2xl shadow-2xl border flex items-center gap-3 text-xs font-semibold ${
            message.type === "success"
              ? "bg-emerald-950/90 text-emerald-300 border-emerald-500/40"
              : "bg-rose-950/90 text-rose-300 border-rose-500/40"
          }`}
        >
          {message.type === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto p-6 sm:p-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#272a33] border border-white/5 w-fit">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "projects" ? "bg-[#0ba376] text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("experiences")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "experiences" ? "bg-[#0ba376] text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Experiences ({experiences.length})
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === "profile" ? "bg-[#0ba376] text-white shadow-md" : "text-slate-400 hover:text-white"
            }`}
          >
            <User className="w-4 h-4" />
            Profile & Bio
          </button>
        </div>

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Manage Projects</h2>
                <p className="text-xs text-slate-400">Tambah, edit, atau upload gambar proyek ke Cloudinary.</p>
              </div>
              <button
                onClick={() =>
                  setEditingProject({
                    title: "",
                    category: "Full Stack",
                    description: "",
                    details: "",
                    image: "",
                    tags: ["Next.js", "TypeScript"],
                    githubUrl: "",
                    prototypeUrl: "",
                    demoUrl: "",
                  })
                }
                className="px-4 py-2.5 rounded-xl bg-[#0ba376] hover:bg-[#088b64] text-white font-bold text-xs flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                Add New Project
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <div
                  key={proj._id || idx}
                  className="rounded-2xl bg-[#272a33] border border-white/5 overflow-hidden flex flex-col justify-between"
                >
                  {/* Thumbnail */}
                  {proj.image && (
                    <div className="relative aspect-video w-full bg-slate-900 border-b border-white/5">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="300px"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-5 flex-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0ba376]/20 text-[#0ba376] inline-block mb-2">
                      {proj.category}
                    </span>
                    <h3 className="text-base font-bold text-white mb-1.5">{proj.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {proj.tags?.map((t: string, i: number) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 pt-3 border-t border-white/5 flex items-center justify-end gap-2 bg-[#22252c]">
                    <button
                      onClick={() => setEditingProject(proj)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    {proj._id && (
                      <button
                        onClick={() => handleDeleteProject(proj._id)}
                        className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCES TAB */}
        {activeTab === "experiences" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Manage Experience</h2>
                <p className="text-xs text-slate-400">Kelola riwayat karir profesional.</p>
              </div>
              <button
                onClick={() =>
                  setEditingExperience({
                    role: "",
                    company: "",
                    companyLogo: "",
                    period: "2026 - Present",
                    type: "Kontrak",
                    description: ["Tanggung jawab utama..."],
                    tags: ["Next.js", "React"],
                  })
                }
                className="px-4 py-2.5 rounded-xl bg-[#0ba376] hover:bg-[#088b64] text-white font-bold text-xs flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-4 h-4" />
                Add New Experience
              </button>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={exp._id || idx}
                  className="p-5 rounded-2xl bg-[#272a33] border border-white/5 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    {exp.companyLogo && (
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1 shrink-0 border border-white/10 flex items-center justify-center">
                        <Image
                          src={exp.companyLogo}
                          alt={exp.company}
                          fill
                          sizes="40px"
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white">{exp.role}</h3>
                        <span className="text-xs text-emerald-400 font-semibold">• {exp.company}</span>
                        <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-400">{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pt-1">
                        {exp.description?.map((d: string, i: number) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditingExperience(exp)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    {exp._id && (
                      <button
                        onClick={() => handleDeleteExperience(exp._id)}
                        className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === "profile" && profile && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#272a33] border border-white/5 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">General Profile & Identity</h2>
              <p className="text-xs text-slate-400">Perbarui biodata personal, lokasi domisili, email, dll.</p>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    value={profile.name || ""}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Headline</label>
                  <input
                    type="text"
                    value={profile.headline || ""}
                    onChange={(e) => setProfile({ ...profile, headline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Lokasi Domisili</label>
                  <input
                    type="text"
                    value={profile.location || ""}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Email</label>
                  <input
                    type="email"
                    value={profile.email || ""}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">Bio Ringkasan</label>
                <textarea
                  rows={4}
                  value={profile.bio || ""}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#0ba376] hover:bg-[#088b64] text-white font-bold text-sm tracking-wide shadow-lg flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Simpan Profil
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Project Modal with Cloudinary Direct Upload */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-3xl bg-[#272a33] border border-white/10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingProject._id ? "Edit Project" : "Add New Project"}
            </h3>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={editingProject.title || ""}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">Category</label>
                <select
                  value={editingProject.category || "Full Stack"}
                  onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                >
                  <option value="Full Stack">Full Stack</option>
                  <option value="UI/UX & App Design">UI/UX & App Design</option>
                  <option value="System / Web App">System / Web App</option>
                </select>
              </div>

              {/* Cloudinary Image Upload Section */}
              <div className="p-4 rounded-2xl bg-[#1c1e24] border border-white/10 space-y-3">
                <label className="text-xs text-emerald-400 font-bold flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Gambar ke Cloudinary
                </label>

                {editingProject.image && (
                  <div className="relative aspect-video w-full max-w-sm rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                    <Image
                      src={editingProject.image}
                      alt="Preview"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    disabled={uploading}
                    onChange={(e) => handleUploadImage(e, "project")}
                    className="text-xs text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#0ba376] file:text-white hover:file:bg-[#088b64] cursor-pointer"
                  />
                  {uploading && (
                    <span className="text-xs text-blue-400 flex items-center gap-1.5 animate-pulse">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Uploading ke Cloudinary...
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 block mb-1">Atau masukkan Image URL manual:</span>
                  <input
                    type="text"
                    value={editingProject.image || ""}
                    onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                    placeholder="https://res.cloudinary.com/..."
                    className="w-full px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">Description</label>
                <textarea
                  rows={2}
                  required
                  value={editingProject.description || ""}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm resize-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">Tags (pisahkan koma)</label>
                <input
                  type="text"
                  value={Array.isArray(editingProject.tags) ? editingProject.tags.join(", ") : editingProject.tags || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      tags: e.target.value.split(",").map((t: string) => t.trim()),
                    })
                  }
                  placeholder="Next.js, Tailwind, MongoDB"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">GitHub URL</label>
                  <input
                    type="text"
                    value={editingProject.githubUrl || ""}
                    onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Prototype / Demo URL</label>
                  <input
                    type="text"
                    value={editingProject.prototypeUrl || editingProject.demoUrl || ""}
                    onChange={(e) => setEditingProject({ ...editingProject, prototypeUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 rounded-full bg-white/10 text-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-6 py-2 rounded-full bg-[#0ba376] hover:bg-[#088b64] text-white text-xs font-bold disabled:opacity-50"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Experience Modal */}
      {editingExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-3xl bg-[#272a33] border border-white/10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingExperience._id ? "Edit Experience" : "Add New Experience"}
            </h3>

            <form onSubmit={handleSaveExperience} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Role</label>
                  <input
                    type="text"
                    required
                    value={editingExperience.role || ""}
                    onChange={(e) => setEditingExperience({ ...editingExperience, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Company</label>
                  <input
                    type="text"
                    required
                    value={editingExperience.company || ""}
                    onChange={(e) => setEditingExperience({ ...editingExperience, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Period</label>
                  <input
                    type="text"
                    required
                    value={editingExperience.period || ""}
                    onChange={(e) => setEditingExperience({ ...editingExperience, period: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">Employment Type</label>
                  <input
                    type="text"
                    value={editingExperience.type || ""}
                    onChange={(e) => setEditingExperience({ ...editingExperience, type: e.target.value })}
                    placeholder="Kontrak / Penuh Waktu"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                  />
                </div>
              </div>

              {/* Company Logo Upload */}
              <div className="p-4 rounded-2xl bg-[#1c1e24] border border-white/10 space-y-3">
                <label className="text-xs text-emerald-400 font-bold flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Logo Perusahaan (Opsional)
                </label>

                {editingExperience.companyLogo && (
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/10 p-1 flex items-center justify-center">
                      <Image
                        src={editingExperience.companyLogo}
                        alt="Company Logo Preview"
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setEditingExperience({ ...editingExperience, companyLogo: "" })}
                      className="text-xs text-rose-400 hover:underline"
                    >
                      Hapus Logo
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    disabled={uploading}
                    onChange={(e) => handleUploadImage(e, "experience")}
                    className="text-xs text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#0ba376] file:text-white hover:file:bg-[#088b64] cursor-pointer"
                  />
                  {uploading && (
                    <span className="text-xs text-blue-400 flex items-center gap-1.5 animate-pulse">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Uploading Logo...
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 block mb-1">Atau masukkan URL logo (kosongkan jika tidak ada):</span>
                  <input
                    type="text"
                    value={editingExperience.companyLogo || ""}
                    onChange={(e) => setEditingExperience({ ...editingExperience, companyLogo: e.target.value })}
                    placeholder="https://res.cloudinary.com/..."
                    className="w-full px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 text-white text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  Deskripsi / Tugas (Satu poin per baris)
                </label>
                <textarea
                  rows={4}
                  required
                  value={
                    Array.isArray(editingExperience.description)
                      ? editingExperience.description.join("\n")
                      : editingExperience.description || ""
                  }
                  onChange={(e) =>
                    setEditingExperience({
                      ...editingExperience,
                      description: e.target.value.split("\n").filter((l: string) => l.trim().length > 0),
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm resize-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">Tags (pisahkan koma)</label>
                <input
                  type="text"
                  value={
                    Array.isArray(editingExperience.tags)
                      ? editingExperience.tags.join(", ")
                      : editingExperience.tags || ""
                  }
                  onChange={(e) =>
                    setEditingExperience({
                      ...editingExperience,
                      tags: e.target.value.split(",").map((t: string) => t.trim()),
                    })
                  }
                  placeholder="Next.js, Python, Architecture"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1c1e24] border border-white/10 text-white text-sm"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingExperience(null)}
                  className="px-4 py-2 rounded-full bg-white/10 text-slate-300 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-[#0ba376] hover:bg-[#088b64] text-white text-xs font-bold"
                >
                  Save Experience
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
