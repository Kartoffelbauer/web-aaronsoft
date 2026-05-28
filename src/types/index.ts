/**
 * @fileoverview Global type definitions.
 */

export interface EducationItem {
  degree: string;
  institution: string;
  description: string;
  startDate: string; // ISO date string e.g., '2024-03-01'
  endDate?: string; // Serves as graduation date or expected graduation
  isActive: boolean; // true for "Current", false for "Completed"
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
  privacy: {
    title: string;
    description: string;
    hosterData: {
      name: string;
      address: {
        street: string;
        city: string;
        zip: string;
        country: string;
      };
    };
  };
  personalData: {
    name: string;
    address: {
      street: string;
      city: string;
      zip: string;
      country: string;
    };
    email: string;
    phone: string;
  };
}
