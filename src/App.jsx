import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { List } from './views/List';
import { AddItem } from './views/AddItem';
import { Layout } from './views/Layout';

import { useStateWithStorage } from './utils';

export function App() {
	// Create a new shopping list with the token 'my test list'
	// and store it in localStorage at the key 'tcl-shopping-list-token'
	const [listToken, setListToken] = useStateWithStorage(
		'my test list',
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
