// src/data/config.ts
/**
 * @fileoverview Configuration file for the portfolio content.
 */
import type { SiteConfig } from "../types/index.ts";

export const siteConfig: SiteConfig = {
  logo: "DevPortfolio",
  nav: {
    resumeUrl: "/assets/resume.pdf",
  },
  sections: {
    hero: {
      id: "About",
      title: "Software Engineer & Master's Student.",
      description:
        "Skilled developer focused on architecting high-performance applications, robust distributed systems, and low-level engine development. Currently based in Germany, bridging theoretical computer science with pragmatic engineering.",
      linkedinUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
    },
    education: {
      id: "Education",
      items: [
        {
          degree: "Master of Science",
          institution: "Hochschule Heilbronn",
          description:
            "Specializing in advanced software architecture, concurrent systems, and high-performance computing.",
          startDate: "2025-09-01",
          endDate: "2026-09-01",
        },
        {
          degree: "Bachelor of Science",
          institution: "Hochschule Heilbronn",
          description:
            "Foundational computer science principles, data structures, algorithms, and applied software engineering.",
          startDate: "2022-09-01",
          endDate: "2025-09-01",
        },
      ],
    },
    skills: {
      id: "Skills",
      items: [
        { name: "C++", startDate: "2021-01-01" },
        { name: "C#", startDate: "2022-01-01" },
        { name: "Java", startDate: "2022-01-01" },
        { name: "Unity", startDate: "2023-01-01" },
      ],
    },
    projects: {
      id: "Projects",
      items: [
        {
          title: "Game Engine Core",
          link: "#",
          description:
            "A custom 3D rendering engine built from scratch to explore low-level graphics APIs and memory management techniques.",
          imageUrl:
            "https://img.magnific.com/vektoren-kostenlos/hintergrund-realistische-abstrakte-technologie-teilchen_23-2148431735.jpg?semt=ais_hybrid&w=740&q=80",
          tags: ["C++", "OpenGL", "CMake"],
        },
        {
          title: "Distributed Systems",
          link: "#",
          description:
            "Implementation of a fault-tolerant distributed key-value store using the Raft consensus algorithm.",
          imageUrl:
            "https://img.magnific.com/vektoren-kostenlos/hintergrund-realistische-abstrakte-technologie-teilchen_23-2148431735.jpg?semt=ais_hybrid&w=740&q=80",
          tags: ["Java", "Networking", "Concurrency"],
        },
        {
          title: "Engine Architecture",
          link: "#",
          description:
            "A scalable entity-component-system (ECS) framework designed for performance and cache-friendliness in simulation environments.",
          imageUrl:
            "https://img.magnific.com/vektoren-kostenlos/hintergrund-realistische-abstrakte-technologie-teilchen_23-2148431735.jpg?semt=ais_hybrid&w=740&q=80",
          tags: ["C#", "Unity", "Architecture"],
        },
      ],
    },
    social: {
      id: "Social",
      items: [
        {
          author: "Alex Mercer",
          headline: "System Architect @ DevCore | C++ | Java",
          startDate: "2021-01-01",
          content:
            "Excited to share a deep-dive update on my recent personal projects. Bridging the gap between graphics engines and distributed systems.",
          imageUrl:
            "https://placehold.co/600x320/151b23/38bdf8?text=Architecture+Diagram",
          linkUrl: "#",
          linkText: "View Case Study →",
          tags: ["C#", "Unity", "Architecture"],
        },
        {
          author: "Alex Mercer",
          headline: "System Architect @ DevCore | C++ | Java",
          startDate: "2021-01-01",
          content:
            "Just open-sourced my new physics simulation library. Built completely from scratch using standard C++20 features. Check out the repo!",
          imageUrl:
            "https://placehold.co/600x320/151b23/10b981?text=Physics+Engine",
          linkUrl: "https://github.com/yourusername/repo",
          linkText: "View on GitHub",
          tags: ["C#", "Unity", "Architecture"],
        },
        {
          author: "Alex Mercer",
          headline: "System Architect @ DevCore | C++ | Java",
          startDate: "2021-01-01",
          content:
            "My thoughts on optimizing cache-friendliness in ECS frameworks. Wrote a quick breakdown of how memory alignment changed our frame rates.",
          imageUrl:
            "https://placehold.co/600x320/151b23/f59e0b?text=ECS+Memory+Layout",
          linkUrl: "#",
          linkText: "Read Article →",
          tags: ["C#", "Unity", "Architecture"],
        },
      ],
    },
  },
  legal: {
    personalData: {
      name: "DevPortfolio GmbH",
      address: {
        street: "Musterstraße 111",
        zip: "90210",
        city: "Musterstadt",
        country: "Deutschland",
      },
      phone: "+49 (0) 123 44 55 66",
      email: "mustermann@musterfirma.de",
    },
    hosterData: {
      name: "Hoster GmbH",
      address: {
        street: "Musterstraße 111",
        zip: "90210",
        city: "Musterstadt",
        country: "Deutschland",
      },
    },
  },
};
