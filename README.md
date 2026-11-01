# Yoga Febriatala - Personal Portfolio & CMS

Website portofolio interaktif dan modern karya **Yoga Febriatala** (Software Engineer & Web Developer) yang dibangun dengan arsitektur modern Next.js 16, React 19, Tailwind CSS v4, Mongoose (MongoDB Atlas), dan Cloudinary Image CDN. 

Mengusung tema desain profesional terinspirasi dari **BreezyCV vCard (Dark Theme)** dengan transisi mulus, responsive mobile navigation, serta panel CMS admin interaktif untuk mengelola proyek, pengalaman kerja, dan biodata profil.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, Cache Components)
- **UI & Styling**: React 19, Tailwind CSS v4, Lucide Icons
- **Database**: MongoDB Atlas via Mongoose
- **Image Storage & CDN**: Cloudinary
- **Architecture**: Atomic Design (Atoms, Molecules, Organisms, Templates)
- **Deployment**: Vercel

---

## ✨ Features

- **vCard Navigation Tab Layout**:
  - **About Me**: Ringkasan profesional, kualifikasi, grid keahlian teknologi (Frontend, Backend, Architecture, Tools), dan prinsip kerja.
  - **Resume**: Timeline pengalaman kerja vertikal dengan aksen status kerja aktif, logo perusahaan dinamis, serta grid riwayat pendidikan dan sertifikasi kompetensi.
  - **Portfolio**: Filter kategori proyek (*Full Stack*, *UI/UX & App Design*, *System / Web App*) lengkap dengan modal detail interaktif.
  - **Blog & Trail**: Dokumentasi tulisan teknis dan jejak rilis.
  - **Contact**: Formulir kontak interaktif dan info domisili Kabupaten Bogor.
- **Admin Dashboard (`/admin`)**:
  - Login terproteksi (`admin123`).
  - Manajemen proyek (CRUD) dengan upload gambar otomatis ke Cloudinary.
  - Manajemen pengalaman kerja (CRUD) dengan upload logo perusahaan mandiri.
  - Manajemen biodata profil.

---

## 🛠️ Local Development

1. **Clone repository**:
   ```bash
   git clone https://github.com/yogafebriatala24/new-portfolio.git
   cd new-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup environment variables** (`.env.local`):
   ```env
   MONGODB_URI="your-mongodb-atlas-uri"
   CLOUDINARY_URL="cloudinary://<key>:<secret>@<cloud_name>"
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<cloud_name>"
   CLOUDINARY_API_KEY="<key>"
   CLOUDINARY_API_SECRET="<secret>"
   ADMIN_PASSWORD="admin123"
   ```

4. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.
