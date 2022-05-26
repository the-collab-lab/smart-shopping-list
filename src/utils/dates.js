export const ONE_DAY_IN_MILLISECONDS = 86400000;

/**
 * Get a new JavaScript Date that is `offset` days in the future.
 * @example
 * // Returns a Date 3 days in the future
 * getFutureDate(3)
 * @param {number} offset
 */
export function getFutureDate(offset) {
	return new Date(Date.now() + offset * ONE_DAY_IN_MILLISECONDS);
}

/**
 * Calculate the amount of time between two Dates, in milliseconds.
 * @param {Date} dateA
 * @param {Date} dateB
 */
export function calculateDateDiff(dateA, dateB) {
	return Math.abs(dateA.getTime() - dateB.getTime());
}
