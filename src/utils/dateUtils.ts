/**
 * Utility functions for date calculations
 */

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