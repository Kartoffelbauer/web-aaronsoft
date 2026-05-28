// src/data/config.ts
/**
 * @fileoverview Configuration file for the portfolio content.
 */
import type { SiteConfig } from "../types/index.ts";

export const siteConfig: SiteConfig = {
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
  ],
  skills: [
    { name: "C++", startDate: "2021-01-01" },
    { name: "C#", startDate: "2022-01-01" },
    { name: "Java", startDate: "2022-01-01" },
    { name: "Unity", startDate: "2023-01-01" },
  ],
  projects: [
    {
      title: "Game Engine Core",
      link: "#",
      description:
        "A custom 3D rendering engine built from scratch to explore low-level graphics APIs and memory management techniques.",
      image:
        "https://img.magnific.com/vektoren-kostenlos/hintergrund-realistische-abstrakte-technologie-teilchen_23-2148431735.jpg?semt=ais_hybrid&w=740&q=80",
      tags: ["C++", "OpenGL", "CMake"],
    },
    {
      title: "Distributed Systems",
      link: "#",
      description:
        "Implementation of a fault-tolerant distributed key-value store using the Raft consensus algorithm.",
      image:
        "https://img.magnific.com/vektoren-kostenlos/hintergrund-realistische-abstrakte-technologie-teilchen_23-2148431735.jpg?semt=ais_hybrid&w=740&q=80",
      tags: ["Java", "Networking", "Concurrency"],
    },
    {
      title: "Engine Architecture",
      link: "#",
      description:
        "A scalable entity-component-system (ECS) framework designed for performance and cache-friendliness in simulation environments.",
      image:
        "https://img.magnific.com/vektoren-kostenlos/hintergrund-realistische-abstrakte-technologie-teilchen_23-2148431735.jpg?semt=ais_hybrid&w=740&q=80",
      tags: ["C#", "Unity", "Architecture"],
    },
  ],
  footer: {
    title: "DevPortfolio",
  },
};
