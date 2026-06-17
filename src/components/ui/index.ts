/**
 * @fileoverview Component Registry for UI Primitives (Barrel File).
 * Aggregates internal UI components for clean, single-line imports across layouts.
 */

// Core Primitives
export { default as Button } from './Button.astro';
export { default as Container } from './Container.astro';
export { default as Icon } from './Icon.astro';
export { default as Logo } from './Logo.astro';

// Domain Cards
export { default as ProjectCard } from './cards/ProjectCard.astro';
export { default as SkillCard } from './cards/SkillCard.astro';
export { default as SocialCard } from './cards/SocialCard.astro';

// Complex Composites
export { default as EduTimeline } from './edu-timeline/EduTimeline.astro';
