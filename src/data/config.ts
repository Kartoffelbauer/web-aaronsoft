/**
 * Configuration file for the portfolio content.
 * Centralizing data here makes it easy to update the site without touching the UI logic.
 */

export interface NavLink {
  label: string;
  url: string;
}

export interface EducationItem {
  degree: string;
  status: string;
  statusType: "current" | "completed";
  institution: string;
  duration: string;
  description: string;
}

export interface SkillItem {
  name: string;
  startDate: string; // ISO date string e.g., '2019-01-01'
}

export interface ProjectItem {
  title: string;
  link: string;
  description: string;
  image: string;
  tags: string[];
}

export const siteConfig = {
  hero: {
    title: "Software Engineer & Master's Student.",
    description:
      "Skilled developer focused on architecting high-performance applications, robust distributed systems, and low-level engine development. Currently based in Germany, bridging theoretical computer science with pragmatic engineering.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    image:
      "https://www.eyesandmore.de/dw/image/v2/BJBD_PRD/on/demandware.static/-/Library-Sites-Library-eyesandmore/default/dw942e6286/Biometrisches-Passbild-mit-Brille-desk.png",
  },
  nav: [
    { label: "About", url: "#about" },
    { label: "Education", url: "#education" },
    { label: "Skills", url: "#skills" },
    { label: "Projects", url: "#projects" },
  ],
  resumeUrl: "/assets/resume.pdf",
  education: [
    {
      degree: "Master of Science",
      status: "Current",
      statusType: "current",
      institution: "Hochschule Heilbronn",
      duration: "Semester 3 / Expected 2025",
      description:
        "Specializing in advanced software architecture, concurrent systems, and high-performance computing.",
    },
    {
      degree: "Bachelor of Science",
      status: "Completed",
      statusType: "completed",
      institution: "Hochschule Heilbronn",
      duration: "7 Semesters",
      description:
        "Foundational computer science principles, data structures, algorithms, and applied software engineering.",
    },
  ] as EducationItem[],
  skills: [
    { name: "C++", startDate: "2021-01-01" },
    { name: "C#", startDate: "2022-01-01" },
    { name: "Java", startDate: "2022-01-01" },
    { name: "Unity", startDate: "2023-01-01" },
  ] as SkillItem[],
  projects: [
    {
      title: "Game Engine Core",
      link: "#",
      description:
        "A custom 3D rendering engine built from scratch to explore low-level graphics APIs and memory management techniques.",
      image:
        "https://lh3.googleusercontent.com/aida/ADBb0ujzWyp7vZj4aZgAbz434uhGOnRj7nO97aDC-b54gvTVwwXOTh5BLQr5uyijEBOdxBSAy8kR31y-vaus3EBGVKiL1JBTaZe3ITU8MMVx5b64LfX-bCT6_GheyV3dhaZGY9zayK15ndAflN1PDOunPoxA1J_pT3CKZCZdPFipOBW04EyC4fxa_azHGQaUSIx2YSeGN6zBtnXpBKUdv4n0b-nj89HT7Nmlf2ZSv2jDml7VFlZrnbbo0sob3g",
      tags: ["C++", "OpenGL", "CMake"],
    },
    {
      title: "Distributed Systems",
      link: "#",
      description:
        "Implementation of a fault-tolerant distributed key-value store using the Raft consensus algorithm.",
      image:
        "https://lh3.googleusercontent.com/aida/ADBb0uiy7OISVxUQfNWoi57f2teIqw9LipanqYbB95wot3uaPgnECigA4orE3pH0GNRs2we88Y3BRF86ILQkFJnA2wb0dH8JNYOvdJI4LaqydMhn99mvCRNp1GXYfTsSlbeVdfUm4IZxXbQZyYhR7WIG1QLVu93Z3Rra188k1tI3Vvz2u7odRl7YNuaCHxfaQ2QW91tTUk6zd8cc_KSaApU6G9_2T8ipWR1BljddjZSrDWMQpmUCYinWJ87lEA",
      tags: ["Java", "Networking", "Concurrency"],
    },
    {
      title: "Engine Architecture",
      link: "#",
      description:
        "A scalable entity-component-system (ECS) framework designed for performance and cache-friendliness in simulation environments.",
      image:
        "https://lh3.googleusercontent.com/aida/ADBb0ujF2vOxy9MSr4lVQwLUIs1SeNcsGG2Bv6ckIJosXHLOeuJzGArb3Samupy1F-t_bARExUIysX7QmRuAdzcxwduneUEPjayfbCmKFRjZM-KNFsCy8bI_0xQMfCcIOwhf5-RuzUJFSAHqzJhzNxQdvNFG2u7HcrJK3AJxiMmv-V_cNAkhYKZDedTaRNdKizPJ3wuUT5VE6wcPRj4PQQKwkzHbYt30ldQuuPnnkfE5hih50LxABZqhlFQgYQ",
      tags: ["C#", "Unity", "Architecture"],
    },
  ] as ProjectItem[],
  footer: {
    title: "DevPortfolio",
  },
};
