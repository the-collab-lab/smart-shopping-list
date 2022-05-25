export const ONE_DAY_IN_MILLISECONDS = 86400000;

/**
 * Get a new JavaScript Date that is `daysInFuture` days in the future.
 * @example
 * // Returns a Date 3 days in the future
 * getFutureDate(3)
 * @param {number} daysInFuture
 */
export function getFutureDate(daysInFuture) {
	return new Date(Date.now() + daysInFuture * ONE_DAY_IN_MILLISECONDS);
}
