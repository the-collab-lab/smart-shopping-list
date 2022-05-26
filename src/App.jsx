import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { List } from './views/List';
import { AddItem } from './views/AddItem';
import { Layout } from './views/Layout';

import { useStateWithStorage } from './utils';

export function App() {
	/**
	 * Here, we're using a custom hook to create `listToken` and a function
	 * that can be used to update `listToken` later.
	 *
	 * `listToken` is `my-test-list` by default so you can see the list
	 * of items that was prepopulated for this project.
	 * You'll later set it to `null` by default (since new users do not
	 * have tokens), and use `setListToken` when you allow a user
	 * to create and join a new list.
	 */
	const [listToken, setListToken] = useStateWithStorage(
		'my-test-list',
		'tcl-shopping-list-token',
	);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/list" element={<List listToken={listToken} />} />
					<Route path="/add-item" element={<AddItem />} />
				</Route>
			</Routes>
		</Router>
	);
}
