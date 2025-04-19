import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { icons } from "lucide-react";

export const RESUME_DATA = {
  name: "Deepak Kumar Sinha",
  badges: ["Hire Me!"],
  initials: "DS",
  location: "Chennai, India, IST",
  locationLink:
    "https://www.google.com/maps/place/Estancia+Tower+1/@12.8270806,80.0393295,15z/data=!3m1!4b1!4m6!3m5!1s0x3a52f70b945e4e71:0xc4ebd0231c59cc38!8m2!3d12.8270599!4d80.0496292!16s%2Fg%2F11bxfxjd3x?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D",
  about:
    "Aspiring Full Stack Developer with a strong interest in system design and building scalable web applications.",
  summary: (
    <>
      Final-year B.TecD student with hands-on experience in real-time web apps,
      full-stack development, and DevOps. Passionate about clean architecture,
      WebSockets, and performance optimization.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/94794077?v=4",
  personalWebsiteUrl: "", // Add personal portfolio URL if available
  contact: {
    email: "sinhadeepak1115@gmail.com",
    tel: "+91-7004610503",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sinhadeepak1115",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deepak-sinha-55b64a206/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sinhadeepak1115",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SRM Institute of Science and Technology, KTR",
      degree: "B.Tech in Computer Science and Engineering (Data Science)",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "VAYUT Autonomous Systems and Technologies",
      link: "#",
      badges: ["On Site"],
      title: "Autonomous Systems Intern",
      logo: ParabolLogo,
      start: "March-2023",
      end: "July-2023",
      description: (
        <>
          Built autonomous drone systems and developed end-to-end robotics
          modules.
          <ul className="list-inside list-disc">
            <li>
              Worked on system design, tuning, and performance optimization
            </li>
            <li>Integrated image recognition using machine learning</li>
            <li>
              Collaborated with cross-functional teams to prototype autonomous
              solutions
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js/Express",
    "WebSockets",
    "Tailwind CSS",
    "Zod",
    "JWT",
    "MERN Stack",
    "Docker",
    "Kubernetes",
    "AWS/Vercel/Cloudflare",
    "MySQL/PostgreSQL/MongoDB/Neo4j",
    "CI/CD",
    "System Design",
    "Git/GitHub",
  ],
  projects: [
    {
      title: "Voom",
      techStack: [
        "TypeScript",
        "Next.js",
        "ClerkJS",
        "Tailwind",
        "Shadcn/ui",
        "Stream.io",
      ],
      description:
        "A video conferencing platform for virtual meetings with authentication and real-time video.",
      logo: ParabolLogo,
      link: {
        label: "voom-liard.vercel.app",
        href: "https://voom-liard.vercel.app/",
      },
    },
    {
      title: "Chess",
      techStack: [
        "TypeScript",
        "React",
        "Chess.js",
        "WebSockets",
        "Vite",
        "Tailwind CSS",
      ],
      description:
        "A real-time multiplayer chess game with move validation and checkmate detection using WebSocket.",
      logo: JojoMobileLogo,
      link: {
        label: "GitHub - Chess",
        href: "https://github.com/sinhadeepak1115/chess",
      },
    },
    {
      title: "Vercel Clone",
      techStack: ["AWS-ECS", "AWS-S3", "Git", "Express"],
      description:
        "A simplified clone of the Vercel cloud platform for static and serverless deployments.",
      logo: MonitoLogo,
      link: {
        label: "GitHub - Vercel Clone",
        href: "https://github.com/sinhadeepak1115/vercel-clone",
      },
    },
  ],
  certifications: [
    {
      title: "100xDevs Fullstack + DevOps",
      link: "https://app.100xdevs.com/certificate/verify/VLZC8A5T",
    },
  ],
} as const;
