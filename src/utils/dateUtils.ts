/**
 * Utility functions for date calculations
 */

/**
 * Calculates the number of academic semesters passed between two dates.
 * Assumes a standard 6-month academic semester.
 * * @param startDate The starting date in ISO format (e.g., '2023-09-01')
 * @param endDate Optional end date. Defaults to today if omitted.
 * @returns The integer number of semesters
 */
export function calculateSemesters(
  startDate: string,
  endDate?: string,
): number {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  // Calculate total months between the two dates
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Divide by 6 to get semesters, add 1 because the first 6 months is Semester 1
  return Math.max(1, Math.floor(months / 6) + 1);
}

/**
 * Generates a formatted academic duration string (e.g., "Semester 3 / Expected 2025").
 * * @param item The EducationItem to format
 * @returns A clean, readable duration string
 */
export function formatAcademicDuration(item: {
  startDate: string;
  endDate?: string;
  isActive: boolean;
}): string {
  // If active, calculate against today. If completed, calculate against the endDate.
  const semesters = calculateSemesters(
    item.startDate,
    item.isActive ? undefined : item.endDate,
  );

  if (item.isActive && item.endDate) {
    const expectedYear = new Date(item.endDate).getFullYear();
    return `Semester ${semesters} / Expected ${expectedYear}`;
  }

  if (item.isActive) {
    return `Semester ${semesters}`;
  }

  return `${semesters} Semesters`;
}

/**
 * Calculates the number of years between a given past date and today.
 * @param startDate The starting date in ISO format (e.g. '2019-05-01')
 * @returns The number of full years passed
 */
export function calculateYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  const m = today.getMonth() - start.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < start.getDate())) {
    years--;
  }

  // Ensure we don't return negative years, standardizes at least 0
  return Math.max(0, years);
}

/**
 * Returns the current year as a string.
 */
export function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}
