import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AddItem, Home, Layout, List } from './views';

import { getItemData, streamListItems } from './api';

export function App() {
	const [data, setData] = useState([]);
	/**
	 * Here, we're using a custom hook to create `listToken` and a function
	 * that can be used to update `listToken` later. This hook ensures that our
	 * application's state is synced with localStorage.
	 *
	 * `listToken` is `my test list` by default so you can see the list
	 * of items that was prepopulated for this project.
	 * You'll later set it to `null` by default (since new users do not
	 * have tokens), and use `setListToken` when you allow a user
	 * to create and join a new list.
	 */
	const [listToken, setListToken] = useStateWithStorage(
		'tcl-shopping-list-token',
		'my test list',
	);

	useEffect(() => {
		if (!listToken) return;

		/**
		 * streamListItems` takes a `listToken` so it can commuinicate
		 * with our database, then calls a callback function with
		 * a `snapshot` from the database.
		 *
		 * Refer to `api/firebase.js`.
		 */
		return streamListItems(listToken, (snapshot) => {
			/**
			 * Here, we read the documents in the snapshot and do some work
			 * on them, so we can save them in our React state.
			 *
			 * Refer to `api/firebase.js`
			 */
			const nextData = getItemData(snapshot);

			/** Finally, we update our React state. */
			setData(nextData);
		});
	}, [listToken]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/list" element={<List data={data} />} />
					<Route path="/add-item" element={<AddItem />} />
				</Route>
			</Routes>
		</Router>
	);
}

/**
 * Set some state in React, and also persist that value in localStorage.
 * @param {string} storageKey The key of the value in localStorage.
 * @param {string | null} initialValue The initial value to store in localStorage and React state.
 * @returns {[string | null, React.Dispatch<string | null>]}
 */
export function useStateWithStorage(storageKey, initialValue) {
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
