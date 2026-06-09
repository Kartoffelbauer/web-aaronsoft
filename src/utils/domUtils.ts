/**
 * @fileoverview Generic DOM and CSS manipulation utilities.
 * Keeps feature-specific scripts (like scrollSpy) clean and focused.
 */

/**
 * Safely extracts a CSS variable from the document root and converts it to a raw pixel number.
 * Handles both `px` and `rem` units seamlessly.
 * * @param varName - The exact name of the CSS variable
 * @returns The computed value in pixels as a number.
 */
export function getCssVariableInPixels(varName: string): number {
  // SSR Safety Check: Ensure this only runs on the client.
  // This prevents Astro build errors if the utility is accidentally invoked during server rendering.
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return 0;
  }

  const style = getComputedStyle(document.documentElement);
  const value = style.getPropertyValue(varName).trim();

  if (!value) return 0;

  // Convert rem to px using the root html font size
  if (value.endsWith('rem')) {
    const rootFontSize = parseFloat(style.fontSize) || 16;
    return parseFloat(value) * rootFontSize;
  }

  // Fallback for px or raw numbers
  return parseFloat(value) || 0;
}
