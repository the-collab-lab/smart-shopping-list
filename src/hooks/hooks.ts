import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type useStateWithStorageReturn = [
	string | null,
	Dispatch<SetStateAction<string | null>>,
];

export function useStateWithStorage(
	storageKey: string,
	initialValue: string | null,
): useStateWithStorageReturn {
	const [value, setValue] = useState(
		() => localStorage.getItem(storageKey) ?? initialValue,
	);
	useEffect(() => {
		if (value === null || value === undefined) {
			return localStorage.removeItem(storageKey);
		}
		return localStorage.setItem(storageKey, value);
	}, [storageKey, value]);

	return [value, setValue];
}
