import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AddItem } from './views/AddItem';
import { Home } from './views/Home';
import { Layout } from './views/Layout';
import { List } from './views/List';

import { streamListItems } from './api';
import { useStateWithStorage } from './utils';

export function App() {
	const [data, setData] = useState([]);
	/**
	 * Here, we're using a custom hook to create `listToken` and a function
	 * that can be used to update `listToken` later.
	 *
	 * `listToken` is `my test list` by default so you can see the list
	 * of items that was prepopulated for this project.
	 * You'll later set it to `null` by default (since new users do not
	 * have tokens), and use `setListToken` when you allow a user
	 * to create and join a new list.
	 */
	const [listToken, setListToken] = useStateWithStorage(
		'my test list',
		'tcl-shopping-list-token',
	);

	useEffect(() => {
		if (!listToken) return;

		/**
		 * Firebase allows us to listen to a collection and get realtime updates
		 * when a document in that collection changes. In these next few lines
		 * of code, we define a callback function that runs whenever Firestore
		 * notifies us of a realtime update.
		 *
		 * The callback function receives a snapshot from the database;
		 * that snapshot has the information we need.
		 *
		 * @see: https://firebase.google.com/docs/firestore/query-data/listen
		 */
		return streamListItems(listToken, (snapshot) => {
			/**
			 * We need a place to store the data after we get it.
			 * This array is going to become our `data` state.
			 */
			const nextData = [];

			/** * The snapshot contains an array of document references. */
			snapshot.docs.forEach((docRef) => {
				/**
				 * We must call a special `.data()` function to get the data
				 * out of the referenced document */
				const data = docRef.data();

				/**
				 * The document's ID is not part of the data, but it's very useful
				 * so we add it to our data; then we push the data into our array.
				 */
				data.id = docRef.id;
				nextData.push(data);
			});

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
