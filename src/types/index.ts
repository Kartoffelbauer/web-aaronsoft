/**
 * @fileoverview Global type definitions.
 */

export interface EducationItem {
  degree: string;
  institution: string;
  description: string;
  startDate: string; // ISO format e.g., '2023-09-01'
  endDate: string; // Graduation date or expected graduation
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
  nav: {
    resumeUrl: string;
  };
  sections: {
    hero: {
      displayName: string;
      title: string;
      description: string;
      imageUrl: string;
      linkedinUrl: string;
      githubUrl: string;
    };
    education: {
      displayName: string;
      items: EducationItem[];
    };
    skills: {
      displayName: string;
      items: SkillItem[];
    };
    projects: {
      displayName: string;
      items: ProjectItem[];
    };
  };
  legal: {
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
}
