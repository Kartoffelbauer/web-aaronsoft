/**
 * @fileoverview High-performance, highly-accurate ScrollSpy utility.
 * Uses requestAnimationFrame to prevent layout thrashing while guaranteeing
 * 100% accuracy during extremely fast scroll events.
 */

/**
 * Initializes the ScrollSpy mechanism to update active navigation links.
 * * @param navbarOffset - The offset in pixels to account for fixed headers and visual breathing room. Defaults to 128.
 */
export function initScrollSpy(navbarOffset: number = 128): void {
  // 1. Select DOM elements
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>('section[id]')
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

  // 3. State management for the rAF loop
  let isTicking = false;

  /**
   * The core calculation logic.
   * Finds the section currently occupying the top of the viewport.
   */
  const updateActiveSection = () => {
    let currentActiveId = '';

    // Loop through sections to find which one is currently at the top
    for (const section of sections) {
      // getBoundingClientRect().top is the distance from the top of the viewport
      const rect = section.getBoundingClientRect();

      // If the top of the section is at or above our dynamic navbar line...
      if (rect.top <= navbarOffset) {
        currentActiveId = section.id;
      } else {
        // Because DOM sections are sequential, the moment we hit a section
        // that is BELOW the navbar line, we know the PREVIOUS section is the active one.
        // We can break the loop early for maximum performance.
        break;
      }
    }

    // Edge case: If the user scrolls to the absolute bottom of the document,
    // force the last section to be active, even if it hasn't reached the navbar line.
    // 1. Use Math.ceil to safely handle fractional pixel scrolling
    const scrollPosition = Math.ceil(window.innerHeight + window.scrollY);
    // 2. Use documentElement.scrollHeight for the true scrollable height of the page
    const documentHeight = document.documentElement.scrollHeight;
    // 3. Check if at bottom AND ensure the page is actually tall enough to be scrollable
    const isAtBottom =
      scrollPosition >= documentHeight && documentHeight > window.innerHeight;
    if (isAtBottom && sections.length > 0) {
      currentActiveId = sections[sections.length - 1].id;
    }

    // Update the DOM classes (O(1) lookup)
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
   * Ensures our heavy calculation only runs once per screen refresh (typically 60fps).
   */
  const onScroll = () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateActiveSection);
      isTicking = true;
    }
  };

  // 4. Attach listener using `{ passive: true }` so scrolling isn't blocked by JS
  window.addEventListener('scroll', onScroll, { passive: true });

  // 5. Trigger immediately to set the initial active state on page load
  updateActiveSection();
}
