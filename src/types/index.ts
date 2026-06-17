/**
 * @fileoverview Global domain models and type definitions for the application.
 * Utilizes generic interfaces for highly scalable, DRY configuration typing.
 */

import type {
  EducationItem,
  ProjectItem,
  SkillItem,
  SocialItem,
} from '@/components/ui/types';

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
  /** Absolute URL to the developer's LinkedIn profile. */
  linkedinUrl: string;
  /** Absolute URL to the developer's GitHub profile. */
  githubUrl: string;
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
    social: ListSection<SocialItem>;
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
