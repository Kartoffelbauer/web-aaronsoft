// src/types/index.ts
/**
 * @fileoverview Global domain models and type definitions for the application.
 * Utilizes generic interfaces for highly scalable, DRY configuration typing.
 */

// ============================================================================
// 1. Base UI Interfaces
// ============================================================================

/**
 * Base interface representing a standard page section.
 * Ensures every section has a unique identifier for navigation and DOM targeting.
 */
export interface BaseSection {
  /** * The unique HTML ID of the section.
   * @example "about" | "education" | "projects"
   */
  id: string;
}

/**
 * A generic interface for any section that displays a collection of data.
 * Extends `BaseSection` to inherit core layout properties.
 * * @template T - The specific domain model representing a single item in the list.
 */
export interface ListSection<T> extends BaseSection {
  /** The collection of data items to be mapped and rendered in the UI. */
  items: T[];
}

/**
 * Specialized interface for the Hero (About) section.
 * Contains unique properties that do not fit the standard list pattern.
 */
export interface HeroSection extends BaseSection {
  /** The primary headline, usually the developer's title or current role. */
  title: string;
  /** A brief, engaging summary of skills and current focus. */
  description: string;
  /** Absolute or relative URL to the profile image. */
  imageUrl: string;
  /** Absolute URL to the developer's LinkedIn profile. */
  linkedinUrl: string;
  /** Absolute URL to the developer's GitHub profile. */
  githubUrl: string;
}

// ============================================================================
// 2. Domain Data Models
// ============================================================================

/**
 * Represents a single academic milestone or degree program.
 */
export interface EducationItem {
  /** The full title of the degree. @example "Master of Science" */
  degree: string;
  /** The name of the university or institution. */
  institution: string;
  /** A brief summary of the curriculum or specializations. */
  description: string;
  /** * The official start date in ISO format. Used for runtime academic calculations.
   * @example "2023-09-01"
   */
  startDate: string;
  /** * The graduation date or expected graduation date in ISO format.
   * Determines if the degree is "Current" or "Completed" at runtime.
   * @example "2025-08-31"
   */
  endDate: string;
}

/**
 * Represents a technical skill, language, or tool.
 */
export interface SkillItem {
  /** The display name of the skill. @example "TypeScript" or "C++" */
  name: string;
  /** * The date the skill was first acquired, in ISO format.
   * Used to dynamically calculate "Years of Experience" at runtime.
   * @example "2019-01-01"
   */
  startDate: string;
}

/**
 * Represents a portfolio project or case study.
 */
export interface ProjectItem {
  /** The display title of the project. */
  title: string;
  /** Absolute URL to the live project, repository, or case study. */
  link: string;
  /** A concise explanation of the project's purpose and architecture. */
  description: string;
  /** Absolute or relative URL to the project's thumbnail image. */
  imageUrl: string;
  /** An array of technologies or concepts utilized. @example ["React", "WebGL"] */
  tags: string[];
}

// ============================================================================
// 3. Master Configuration Model
// ============================================================================

/**
 * The master configuration object that acts as the single source of truth
 * for the entire portfolio's content and legal data.
 */
export interface SiteConfig {
  /** The text or image path used for the top-left navigation logo. */
  logo: string;

  /** Configuration for the main navigation bar. */
  nav: {
    /** Absolute or relative URL to the downloadable resume/CV. */
    resumeUrl: string;
  };

  /** * The content payloads for all page sections.
   * Utilizes the generic ListSection<T> to enforce strict typings.
   */
  sections: {
    hero: HeroSection;
    education: ListSection<EducationItem>;
    skills: ListSection<SkillItem>;
    projects: ListSection<ProjectItem>;
  };

  /** * Mandatory legal information required for German Impressum and Privacy policies.
   */
  legal: {
    /** The website owner's contact information. */
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
    /** The hosting provider's physical location information. */
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
