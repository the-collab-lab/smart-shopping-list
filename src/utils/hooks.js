import { useState, useEffect } from 'react';

/**
 * Set some state in React, and also persist that value in localStorage.
 * @param {string} initialValue The initial value to store in the state.
 * @param {string} key The key at which we want to store the value.
 */
export function useStateWithStorage(initialValue, key) {
	const [value, setValue] = useState(() => {
		const currentValue = localStorage.getItem(key);
		return currentValue ? currentValue : initialValue;
	});
	useEffect(() => {
		if (value === null || value === undefined) {
			return localStorage.removeItem(key);
		}
		return localStorage.setItem(key, value);
	}, [key, value]);
	return [value, setValue];
}
