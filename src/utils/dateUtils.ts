/**
 * @fileoverview Pure functional utility methods for date and academic calculations.
 */

// --- INTERNAL HELPERS (Not exported) ---

function isCurrentlyActive(endDate: string): boolean {
  return new Date(endDate).getTime() > new Date().getTime();
}

function calculateSemesters(
  startDate: string,
  endDate: string,
  isActive: boolean,
): number {
  const start = new Date(startDate);
  const end = isActive ? new Date() : new Date(endDate);

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  return Math.max(1, Math.floor(months / 6) + 1);
}

// --- PUBLIC API (Exported) ---

/**
 * Formats the academic payload into UI-ready strings and state flags.
 */
export function getAcademicStatus(startDate: string, endDate: string) {
  const isActive = isCurrentlyActive(endDate);
  const semesters = calculateSemesters(startDate, endDate, isActive);

  if (isActive) {
    const expectedYear = new Date(endDate).getFullYear();
    return {
      durationText: `Semester ${semesters} / Expected ${expectedYear}`,
      statusLabel: "Current",
      isActive: true,
    };
  }

  return {
    durationText: `${semesters} Semesters`,
    statusLabel: "Completed",
    isActive: false,
  };
}

/**
 * Calculates the number of years between a given past date and today.
 */
export function calculateYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  const m = today.getMonth() - start.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < start.getDate())) {
    years--;
  }

  return Math.max(0, years);
}

/**
 * Generates a formatted experience string (e.g., "3 Years Exp").
 */
export function getExperienceString(startDate: string): string {
  const years = calculateYearsOfExperience(startDate);
  return `${years} Year${years !== 1 ? "s" : ""} Exp`;
}

/**
 * Returns the current year as a string.
 */
export function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}
