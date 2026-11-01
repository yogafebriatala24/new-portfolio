import mongoose, { Schema, model, models } from "mongoose";

// Project Schema
const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Full Stack", "UI/UX & App Design", "System / Web App"],
      default: "Full Stack",
    },
    period: { type: String, default: "" },
    description: { type: String, required: true },
    details: { type: String, default: "" },
    image: { type: String, default: "/img/Foto.png" },
    tags: [{ type: String }],
    demoUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" },
    prototypeUrl: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Experience Schema
const ExperienceSchema = new Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    companyLogo: { type: String, default: "" },
    period: { type: String, required: true },
    type: { type: String, default: "Kontrak" },
    description: [{ type: String }],
    tags: [{ type: String }],
    category: { type: String, enum: ["top", "web", "all"], default: "all" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Profile Schema
const ProfileSchema = new Schema(
  {
    name: { type: String, default: "Yoga Febriatala" },
    headline: { type: String, default: "Software Engineer & Web Developer" },
    subHeadline: { type: String, default: "" },
    location: { type: String, default: "Kabupaten Bogor, Jawa Barat, Indonesia" },
    email: { type: String, default: "febriatala24@gmail.com" },
    phone: { type: String, default: "+6285693941455" },
    whatsappUrl: { type: String, default: "https://wa.me/6285693941455" },
    linkedinUrl: { type: String, default: "https://www.linkedin.com/in/yoga-febriatala/" },
    githubUrl: { type: String, default: "https://github.com/yogafebriatala24" },
    instagramUrl: { type: String, default: "https://instagram.com/yogafebriatala" },
    cvUrl: { type: String, default: "https://drive.google.com/file/d/14t4c_IymColqATpqSsS8Nrm_t9E-VgzS/view?usp=sharing" },
    bio: { type: String, default: "" },
  },
  { timestamps: true }
);

export const ProjectModel = models.Project || model("Project", ProjectSchema);
export const ExperienceModel = models.Experience || model("Experience", ExperienceSchema);
export const ProfileModel = models.Profile || model("Profile", ProfileSchema);
