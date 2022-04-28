import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export function Layout() {
	return (
		<div className="Layout">
			<header className="Layout-header">
				<h1>Smart shopping list</h1>
			</header>
			<main>
				<Outlet />
			</main>
			<nav className="Nav">
				<NavLink to="/" className="Nav-link">
					Home
				</NavLink>
				<NavLink to="/list" className="Nav-link">
					List
				</NavLink>
				<NavLink to="/add-item" className="Nav-link">
					Add Item
				</NavLink>
			</nav>
		</div>
	);
}
