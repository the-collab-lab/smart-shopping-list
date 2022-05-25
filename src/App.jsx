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
	 * `listToken` is `null` by default because brand-new users do not have
	 * tokens. You'll use `setListToken` later, when you create and update
	 * the user's list token.
	 */
	const [listToken, setListToken] = useStateWithStorage(
		'tcl-shopping-list-token',
		null,
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
