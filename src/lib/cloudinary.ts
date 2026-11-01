import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "mxaqrwwz",
  api_key: process.env.CLOUDINARY_API_KEY || "519252261354426",
  api_secret: process.env.CLOUDINARY_API_SECRET || "W26SqEXBhHBayo-moCXP_YHNMIM",
  secure: true,
});

export default cloudinary;
