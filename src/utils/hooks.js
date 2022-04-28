import { useState, useEffect } from 'react';

export function useStateWithStorage(defaultValue, key) {
	const [value, setValue] = useState(() => {
		const stickyValue = localStorage.getItem(key);
		return stickyValue ? JSON.parse(stickyValue) : defaultValue;
	});
	useEffect(() => {
		if (value === null || value === undefined) {
			return localStorage.removeItem(key);
		}
		return localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}
