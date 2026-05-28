/**
 * @fileoverview Global type definitions for the application.
 */

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
  imageUrl: string;
  tags: string[];
}

export interface SiteConfig {
  logo: string;
  linkedinUrl: string;
  githubUrl: string;
  nav: {
    resumeUrl: string;
  };
  hero: {
    title: string;
    description: string;
    image: string;
  };
  education: EducationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  impress: {
    title: string;
    description: string;
  };
}
