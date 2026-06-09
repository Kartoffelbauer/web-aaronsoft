/**
 * @fileoverview High-performance, highly-accurate ScrollSpy utility.
 * Uses requestAnimationFrame to prevent layout thrashing while guaranteeing
 * 100% accuracy during extremely fast scroll events.
 */

import { getCssVariableInPixels } from '@/utils/domUtils';

/**
 * Initializes the ScrollSpy mechanism to update active navigation links.
 * @param additionalOffset - Extra breathing room (in pixels) added below the navbar line. Defaults to 32.
 */
export function initScrollSpy(additionalOffset: number = 32): void {
  // 1. Select DOM elements (Targeting both introductory header and standard sections)
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>('header[id], section[id]')
  );
  const navLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('.nav-link')
  );

  if (!sections.length || !navLinks.length) return;

  // 2. Create a fast O(1) lookup map: sectionId -> HTMLAnchorElement
  const linkMap = new Map<string, HTMLAnchorElement>();
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      linkMap.set(href.substring(1), link);
    }
  });

  // 3. State management
  let isTicking = false;
  let dynamicOffset = 0;

  /**
   * Caches the navbar offset so we don't trigger layout thrashing
   * by calling getComputedStyle during high-frequency scroll events.
   */
  const calculateOffset = () => {
    dynamicOffset =
      getCssVariableInPixels('--shell-height-md') + additionalOffset;
  };

  /**
   * The core calculation logic.
   * Finds the section currently occupying the top of the viewport.
   */
  const updateActiveSection = () => {
    let currentActiveId = '';

    // Loop through sections sequentially
    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      // If the top of the section is at or above our dynamic navbar line...
      if (rect.top <= dynamicOffset) {
        currentActiveId = section.id;
      } else {
        // Because DOM sections are ordered, hitting a section below the line
        // guarantees the previous section is active. Break early for O(1) optimization.
        break;
      }
    }

    // Edge case: Force the last section to be active if scrolled to the absolute bottom
    const scrollPosition = Math.ceil(window.innerHeight + window.scrollY);
    const documentHeight = document.documentElement.scrollHeight;

    const isAtBottom =
      scrollPosition >= documentHeight && documentHeight > window.innerHeight;

    if (isAtBottom && sections.length > 0) {
      currentActiveId = sections[sections.length - 1].id;
    }

    // Update the DOM classes via O(1) map lookup
    navLinks.forEach((link) => link.classList.remove('active'));
    if (currentActiveId) {
      const activeLink = linkMap.get(currentActiveId);
      if (activeLink) activeLink.classList.add('active');
    }

    // Unlock the scroll listener for the next frame
    isTicking = false;
  };

  /**
   * Throttled scroll handler.
   */
  const onScroll = () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateActiveSection);
      isTicking = true;
    }
  };

  // 4. Initialize layout calculations
  calculateOffset();

  // 5. Attach listeners
  window.addEventListener('scroll', onScroll, { passive: true });

  // Re-calculate the layout offset if the user resizes their browser or rotates their device
  window.addEventListener('resize', calculateOffset, { passive: true });

  // 6. Trigger immediately to establish the initial active state on page load
  updateActiveSection();
}
