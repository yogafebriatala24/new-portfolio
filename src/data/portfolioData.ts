export interface Experience {
  role: string;
  company: string;
  companyLogo?: string;
  period: string;
  type?: string;
  description: string[];
  tags: string[];
  category: "top" | "web" | "all";
}

export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "UI/UX & App Design" | "System / Web App";
  period?: string;
  description: string;
  details?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  prototypeUrl?: string;
  featured?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  description: string;
  achievements?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  skills: string;
}

export interface Organization {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Publication {
  title: string;
  platform: string;
  date: string;
  type: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  level?: string;
  category: "frontend" | "backend" | "tools" | "architecture";
}

export const PERSONAL_INFO = {
  name: "Yoga Febriatala",
  headline: "Software Engineer & Web Developer",
  subHeadline: "5+ Years of Experience in Building Scalable, Resilient, and High-Performance Digital Products.",
  location: "Kabupaten Bogor, Jawa Barat, Indonesia",
  shortLocation: "Kabupaten Bogor, Indonesia",
  email: "febriatala24@gmail.com",
  phone: "+6285693941455",
  whatsappUrl: "https://wa.me/6285693941455",
  linkedinUrl: "https://www.linkedin.com/in/yoga-febriatala/",
  githubUrl: "https://github.com/yogafebriatala24",
  instagramUrl: "https://instagram.com/yogafebriatala",
  cvUrl: "https://drive.google.com/file/d/14t4c_IymColqATpqSsS8Nrm_t9E-VgzS/view?usp=sharing",
  stats: {
    experience: "5+ Years",
    projects: "15+ Completed",
    organizations: "5+ Leadership Roles",
  },
  bio: `Software Engineer profesional dengan pengalaman lebih dari 5 tahun dalam merancang, mengembangkan, dan memelihara aplikasi web skala enterprise. Berfokus pada keandalan sistem, performa tinggi, standarisasi kualitas kode (clean code & code review), serta kepemimpinan tim teknis. Terbiasa menerjemahkan visi bisnis dan kebutuhan pengguna menjadi solusi rekayasa perangkat lunak yang tangguh, efisien, dan berdampak nyata.`,
  originalBio: `Hi, I'm Yoga Febriatala. I'm from Bogor, Indonesia and I have been interested in web development since 2017. I started working as a web developer at BMBJ in 2021 and Jurnalistika in 2022. Apart from that, I have also built the NCTech web development team since 2023 and currently I am looking forward to collaborating with you!`,
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "Telkom Indonesia",
    period: "Jun 2026 – Saat ini",
    type: "Kontrak",
    category: "top",
    description: [
      "Menentukan teknologi, infrastruktur, dan platform pemrosesan data yang terukur untuk sistem pemantauan jaringan waktu nyata (real-time).",
      "Menetapkan standar kualitas kode dan mengawasi implementasi teknis lintas tim hingga tahap peluncuran (production deployment).",
      "Memastikan sistem pemantauan mencapai efisiensi tinggi, latensi ultra-rendah, dan mampu menangani volume data jaringan telekomunikasi skala masif.",
      "Menyelaraskan kebutuhan teknis yang rumit antara tim engineering, infrastruktur jaringan, serta tim operasional telekomunikasi."
    ],
    tags: ["Next.js", "React.js", "Network Security", "Telecommunications", "Microfrontend", "Tailwind CSS", "PWA"]
  },
  {
    role: "Lead Software Engineer",
    company: "PT Epsindo Jaya Pratama",
    period: "Jul 2025 – Jun 2026",
    type: "Kontrak",
    category: "top",
    description: [
      "Memimpin pengembangan skala penuh dari Artificial Lift Simulation System, platform analitik komputasi untuk sektor migas (Oil & Gas).",
      "Merancang solusi yang terukur dan berkinerja tinggi untuk mensimulasikan data produksi minyak & gas serta performa pompa ESP secara real-time.",
      "Membimbing dan memandu tim developer lintas fungsi (cross-functional) untuk memastikan kualitas kode dan penerapan standar industri ketat.",
      "Berkolaborasi dengan stakeholder industri untuk menerjemahkan model komputasi matematis yang kompleks menjadi arsitektur perangkat lunak yang tangguh."
    ],
    tags: ["Team Leadership", "Python", "Architecture", "Next.js", "Oil & Gas", "PWA"]
  },
  {
    role: "Senior Software Engineer - Web Platform",
    company: "Mycloudindo",
    period: "Des 2024 – Mei 2026",
    type: "Penuh Waktu",
    category: "web",
    description: [
      "Merancang dan mengelola arsitektur micro-frontend (MFE) untuk peluncuran modul bisnis independen berskala besar yang dideploy secara terisolasi.",
      "Membangun layanan mikro (microservices) pembayaran berkonkurensi tinggi dengan keandalan bahasa Rust dan framework Axum.",
      "Membangun Progressive Web Applications (PWA) dengan kapabilitas luring (offline caching) untuk interaksi mulus pada jaringan berkecepatan rendah.",
      "Menerapkan standar penulisan kode bersih (clean code, automated testing) dan optimasi performa tinggi."
    ],
    tags: ["Rust", "Axum", "Microfrontend", "Next.js", "TypeScript", "PWA", "Zustand"]
  },
  {
    role: "Software Engineer - Web Platform",
    company: "Mycloudindo",
    period: "Jul 2023 – Des 2024",
    type: "Penuh Waktu",
    category: "web",
    description: [
      "Mengembangkan aplikasi web berkinerja tinggi menggunakan Next.js dan TypeScript yang dipadukan dengan Zustand state management dan Tailwind CSS.",
      "Menginisiasi pemisahan monolit ke arsitektur modul independen Microfrontend.",
      "Merancang integrasi API gerbang pembayaran dengan keamanan data terenkripsi dan ketersediaan tinggi."
    ],
    tags: ["React.js", "TypeScript", "Rust", "Tailwind CSS", "PWA"]
  },
  {
    role: "Full Stack Engineer",
    company: "Jurnalistika Media Network",
    period: "Okt 2022 – Jun 2023",
    type: "Paruh Waktu",
    category: "web",
    description: [
      "Membantu modernisasi portal berita digital Jurnalistika dengan melakukan rewrite codebase lawas agar modular dan mudah dirawat.",
      "Mengimplementasikan arsitektur Headless CMS menggunakan Strapi dipadukan dengan frontend Next.js yang optimal untuk core web vitals dan SEO.",
      "Meningkatkan kecepatan render konten dan keandalan sistem distribusi artikel multi-kategori ke ribuan pembaca harian."
    ],
    tags: ["Next.js", "Strapi CMS", "Web Development", "Web Design", "Teamwork"]
  },
  {
    role: "Web Developer",
    company: "BMBJ",
    period: "2021 – 2022",
    type: "Profesional",
    category: "all",
    description: [
      "Mengembangkan aplikasi web responsif dan solusi sistem informasi internal.",
      "Mengimplementasikan integrasi basis data relasional dan optimalisasi komponen antarmuka pengguna."
    ],
    tags: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Web Development"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "staycation",
    title: "Staycation Booking Platform",
    category: "UI/UX & App Design",
    description: "Responsive web application design for hotel and property booking throughout Indonesia with complete checkout flows.",
    details: "This responsive design for Staycation Web App provides seamless hotel booking features across Indonesia. Designed with high-fidelity Figma components, interactive flows, and user-friendly filtering.",
    image: "/img/Stay.png",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Design System"],
    prototypeUrl: "https://www.figma.com",
    featured: true
  },
  {
    id: "foodmarket",
    title: "FoodMarket Mobile Delivery",
    category: "UI/UX & App Design",
    description: "Mobile-first user interface for culinary ordering and MSME food delivery services in Indonesia.",
    details: "The Food Market application is a mobile-based UI design providing digital-based food ordering services from MSMEs in Indonesia with intuitive checkout, driver tracking, and menu discovery.",
    image: "/img/Food.png",
    tags: ["Figma", "Mobile UI", "Design Tokens", "Prototyping"],
    prototypeUrl: "https://www.figma.com",
    featured: true
  },
  {
    id: "toko-online",
    title: "Online Shop & Admin Dashboard",
    category: "Full Stack",
    description: "Full-stack eCommerce web platform with product inventory, order management, and secure transactions.",
    details: "Responsive online shop built with Laravel and modern blade components. Features robust role-based admin controls, catalog filtering, customer cart management, and payment verification.",
    image: "/img/Toko.png",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Bootstrap"],
    githubUrl: "https://github.com/yogafebriatala24/website-toko-online",
    featured: true
  },
  {
    id: "game-topup",
    title: "Gaming Top-Up Experience",
    category: "Full Stack",
    description: "Fast-loading web platform for gaming credits and voucher top-ups with seamless payment gate.",
    details: "Top Up Game website built with Next.js, featuring instantaneous client-side interactions, voucher selection, automated price calculation, and responsive mobile-first views.",
    image: "/img/game.png",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yogafebriatala24/Voucher-Game",
    featured: true
  },
  {
    id: "travel-app",
    title: "Travel & Trip Booking Web Platform",
    category: "Full Stack",
    description: "Responsive travel management system offering tour packages, booking schedules, and financial reporting.",
    details: "Full-featured travel portal incorporating authentication, tour management, transaction logs, and printable analytical reports for tourism operators.",
    image: "/img/travel.png",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "Responsive UI"],
    githubUrl: "https://github.com/yogafebriatala24/Yogsapp",
    featured: true
  },
  {
    id: "futsal-tournament",
    title: "Turnamen Futsal & Manajemen Admin",
    category: "System / Web App",
    period: "Jun 2026 – Jul 2026",
    description: "Aplikasi web turnamen olahraga untuk informasi klasemen langsung, jadwal pertandingan, dan manajemen operasional admin.",
    details: "Dibangun dengan Next.js dan Supabase realtime database untuk sinkronisasi skor pertandingan secara langsung dan bracket eliminasi otomatis.",
    image: "/img/Foto.png",
    tags: ["Next.js", "Supabase", "Realtime", "Tailwind CSS"],
    featured: false
  },
  {
    id: "hmi-komfaktek-app",
    title: "Sistem Manajemen Organisasi HMI Komfaktek",
    category: "System / Web App",
    period: "Jul 2023 – Nov 2023",
    description: "Platform digital terintegrasi untuk pendataan kader, arsip administrasi surat, dan kegiatan himpunan mahasiswa.",
    details: "Membangun sistem informasi berbasis Laravel dengan hak akses bertingkat untuk transparansi keanggotaan dan manajemen dokumen digital.",
    image: "/img/logo.png",
    tags: ["Laravel", "MySQL", "RBAC", "Bootstrap"],
    featured: false
  },
  {
    id: "pemilu-management",
    title: "Sistem Manajemen Pemenangan Pemilu",
    category: "System / Web App",
    period: "Jun 2023 – Okt 2023",
    description: "Sistem informasi web analitik untuk pemetaan basis suara, tabulasi data saksi, dan monitoring pemenangan elektoral.",
    details: "Platform analitik data pemilih dengan dashboard statistik interaktif, pemetaan wilayah, dan rekapitulasi cepat.",
    image: "/img/profile.png",
    tags: ["Next.js", "PostgreSQL", "Analytics Dashboard", "Tailwind CSS"],
    featured: false
  },
  {
    id: "evoting-unpam",
    title: "E-Voting Fakultas Hukum UNPAM",
    category: "System / Web App",
    period: "Agt 2021 – Nov 2021",
    description: "Sistem pemilihan raya elektronik mahasiswa berbasis web dengan enkripsi token suara satu-kali-pakai.",
    details: "Menciptakan sistem e-voting yang aman, akuntabel, dan transparan untuk suksesi kepemimpinan mahasiswa dengan audit trail suara.",
    image: "/img/Foto.png",
    tags: ["Laravel", "PHP", "Security & Encryption", "MySQL"],
    featured: false
  },
  {
    id: "yakusa-comp",
    title: "CV Yakusa Comp Portal",
    category: "Full Stack",
    description: "Aplikasi layanan jual beli perangkat keras dan jasa service reparasi komputer berbasis website.",
    details: "Platform service tracking di mana pelanggan dapat memantau status perbaikan komputer secara real-time dan berbelanja suku cadang.",
    image: "/img/Toko.png",
    tags: ["PHP", "CodeIgniter / Laravel", "MySQL", "Bootstrap"],
    featured: false
  }
];

export const SKILLS_LIST: SkillItem[] = [
  { name: "TypeScript", icon: "/icon/ts.svg", category: "frontend", level: "Advanced" },
  { name: "React.js", icon: "/icon/react.svg", category: "frontend", level: "Advanced" },
  { name: "Next.js", icon: "/icon/next.svg", category: "frontend", level: "Advanced" },
  { name: "Tailwind CSS", icon: "/icon/tailwind.svg", category: "frontend", level: "Mastery" },
  { name: "Redux & Zustand", icon: "/icon/redux.svg", category: "frontend", level: "Advanced" },
  { name: "Python & FastAPI", icon: "/icon/stack.svg", category: "backend", level: "Advanced" },
  { name: "Rust & Axum", icon: "/icon/stack.svg", category: "backend", level: "Intermediate" },
  { name: "PHP & Laravel", icon: "/icon/Laravel.svg", category: "backend", level: "Advanced" },
  { name: "Node.js", icon: "/icon/node.svg", category: "backend", level: "Advanced" },
  { name: "MySQL & PostgreSQL", icon: "/icon/stack.svg", category: "backend", level: "Advanced" },
  { name: "Microfrontend (MFE)", icon: "/icon/stack.svg", category: "architecture", level: "Specialist" },
  { name: "PWA & Offline First", icon: "/icon/stack.svg", category: "architecture", level: "Advanced" },
  { name: "Network & Security", icon: "/icon/stack.svg", category: "architecture", level: "Proficient" },
  { name: "Figma UI/UX", icon: "/icon/figma.svg", category: "tools", level: "Advanced" },
  { name: "Git & CI/CD", icon: "/icon/git.svg", category: "tools", level: "Advanced" },
  { name: "Photoshop & AI", icon: "/icon/ps.svg", category: "tools", level: "Proficient" }
];

export const ORGANIZATIONS: Organization[] = [
  {
    role: "Sekretaris Umum",
    organization: "Karang Taruna",
    period: "Sep 2023 – Saat Ini",
    description: "Menggerakkan tata kelola administrasi dan dinamika kepemudaan desa. Aktif berkolaborasi dalam menginisiasi berbagai program pemberdayaan sosial ekonomi dan pembangunan lingkungan."
  },
  {
    role: "Bidang Media & Publikasi",
    organization: "LBH GP Ansor",
    period: "Sep 2023 – 2025",
    description: "Berada di garda depan strategi kampanye digital. Mengelola materi publikasi edukasi hukum agar kesadaran dan literasi hukum masyarakat tersampaikan secara modern dan persuasif."
  },
  {
    role: "Ketua Umum",
    organization: "HMI Komfaktek (Komisariat Fakultas Teknik)",
    period: "Okt 2022 – Okt 2023",
    description: "Memimpin arah gerak organisasi mahasiswa tingkat fakultas teknik. Menyelenggarakan pelatihan desain teknologi, bedah wawasan ilmiah, dan sukses mengawal RAK komisariat."
  },
  {
    role: "KABID Pariwisata & Ekonomi Kreatif",
    organization: "HIPMI PT Pamulang",
    period: "Jun 2022 – Jun 2023",
    description: "Mendorong lahirnya pengusaha muda dari lingkungan kampus. Mengembangkan program literasi digital bagi UMKM dan mengoptimalkan potensi ekonomi kreatif pariwisata lokal."
  },
  {
    role: "Kepala Bidang Aplikasi & Informatika",
    organization: "Dewan Energi Mahasiswa Indonesia",
    period: "Agt 2022 – Agt 2023",
    description: "Mengorkestrasi platform digital organisasi dan memimpin kampanye transisi energi berbasis data serta teknologi komunikasi publik."
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "Universitas Pamulang",
    degree: "S1 Teknik Informatika (Informatics Engineering)",
    period: "Jun 2019 – Des 2025",
    gpa: "",
    description: "Fokus pada Rekayasa Perangkat Lunak, Arsitektur Web, dan Algoritma Komputasi.",
    achievements: [
      "Finalis / Peserta Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi (GEMASTIK XIII 2020) kategori Game Edukasi.",
      "Ketua Umum HMI Fakultas Teknik UNPAM (2022-2023).",
      "Dirjen Aplikasi dan Informatika Dewan Energi Mahasiswa Indonesia."
    ]
  },
  {
    institution: "SMK Pustek Serpong",
    degree: "Teknik Komputer dan Jaringan (TKJ)",
    period: "2016 – 2019",
    gpa: "",
    description: "Mempelajari fondasi infrastruktur jaringan komputer, perakitan perangkat keras, instalasi sistem operasi, dan konfigurasi server dasar.",
  },
  {
    institution: "SMPN 1 Gunung Sindur",
    degree: "Sekolah Menengah Pertama (SMP)",
    period: "2013 – 2016",
    gpa: "",
    description: "Pendidikan formal tingkat menengah pertama di Gunung Sindur, Kabupaten Bogor.",
  },
  {
    institution: "SDN Cidokom 02",
    degree: "Sekolah Dasar (SD)",
    period: "2007 – 2013",
    gpa: "",
    description: "Pendidikan dasar formal di Desa Cidokom, Gunung Sindur, Kabupaten Bogor.",
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Sertifikasi Programmer",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    period: "Jul 2025 – Jun 2028",
    skills: "React.js, PHP & MySQL (Standar Kompetensi Kerja Nasional Indonesia)"
  },
  {
    name: "Sertifikasi Web Developer",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    period: "Des 2021",
    skills: "HTML, CSS, JavaScript & Bootstrap"
  },
  {
    name: "Full-Stack Web Rent House",
    issuer: "BuildWithAngga",
    period: "Feb 2025",
    skills: "Laravel 11, Next.js 14, Property Rental Modern Web"
  },
  {
    name: "MERN Web Development",
    issuer: "BuildWithAngga",
    period: "Jun 2022",
    skills: "React.js, Node.js, Express, MongoDB & Technical SEO"
  },
  {
    name: "Database MySQL & Pemrograman PHP",
    issuer: "CODEPOLITAN",
    period: "Sep 2021 – Sep 2024",
    skills: "Manajemen Relational Database, Kueri Lanjut & PHP Enterprise"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Transformasi Digital UMKM Sebagai Solusi Kemajuan Ekonomi Umat",
    platform: "Jurnal Transformasi Digital UMKM / Medium",
    date: "10 Des 2023 / 10 Feb 2025",
    type: "Karya Tulis Ilmiah & Publikasi Opini"
  },
  {
    title: "Aplikasi Layanan Jual Beli dan Jasa Service Komputer Berbasis Website",
    platform: "Jurnal Ilmu Komputer dan Sains",
    date: "30 Jul 2022",
    type: "Jurnal Ilmiah Peer-Reviewed"
  }
];

export const WORK_VALUES = [
  {
    title: "Communicative & Leadership",
    icon: "/img/Communicative.png",
    description: "Mampu mengomunikasikan ide arsitektur teknis dengan lugas kepada tim maupun stakeholder non-teknis, diasah melalui rekam jejak kepemimpinan organisasi."
  },
  {
    title: "Seamless Collaboration",
    icon: "/img/Collab.png",
    description: "Berpengalaman mengorkestrasi tim lintas fungsi (cross-functional), code review terstruktur, dan penerapan standar kode bersih yang solid."
  },
  {
    title: "On-Time & Production-Ready",
    icon: "/img/time.png",
    description: "Disiplin dalam eksekusi sprint, mengutamakan keandalan performa sistem, zero regression, dan SLA latensi yang ketat di level production."
  }
];
