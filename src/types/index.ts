/**
 * @fileoverview Global type definitions for the application.
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

export interface SiteConfig {
  hero: {
    title: string;
    description: string;
    linkedin: string;
    github: string;
    image: string;
  };
  nav: NavLink[];
  resumeUrl: string;
  education: EducationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  footer: {
    title: string;
  };
}
