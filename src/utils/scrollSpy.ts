/**
 * Utility for highlighting the active navigation link based on scroll position.
 * This ensures the navigation visually reflects what section the user is currently reading.
 * Uses passive event listeners for high performance.
 */
export function initScrollSpy(): void {
  const sections = Array.from(
    document.querySelectorAll("section[id]"),
  ) as HTMLElement[];
  const navLinks = Array.from(
    document.querySelectorAll(".nav-link"),
  ) as HTMLAnchorElement[];

  if (sections.length === 0 || navLinks.length === 0) return;

  const onScroll = () => {
    // Calculate current scroll position factoring in the fixed navbar height (approx 64px) + padding
    const scrollPosition = window.scrollY + 100;

    let currentSectionId = 0;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;

      // Check if the current scroll position is within the bounds of this section
      if (scrollPosition >= sectionTop) {
        currentSectionId = index;
      }
    });

    // Edge case: if we've scrolled to the absolute bottom of the document,
    // highlight the last section even if it's too short to reach the detection threshold.
    const atBottom =
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight - 10;
    if (atBottom) {
      currentSectionId = sections.length - 1;
    }

    // Apply active classes to links matching the current section ID
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${sections[currentSectionId].getAttribute("id")}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  // Attach passive scroll listener for optimal performance
  window.addEventListener("scroll", onScroll, { passive: true });

  // Trigger immediately to set initial state
  onScroll();
}
