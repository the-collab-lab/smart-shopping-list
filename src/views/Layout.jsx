import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LiveAnnouncer } from '../components/LiveAnnoncer';

import './Layout.css';

export function Layout() {
	const [navigationAnnouncement, setNavigationAnnouncement] = useState('');
	const location = useLocation();

	useEffect(() => {
		let pageTitle = location.pathname.slice(1).replace('-', ' ');
		if (pageTitle === '') {
			pageTitle = 'home';
		}
		setNavigationAnnouncement(
			`Navigated to ${pageTitle} page – ${document.title}`,
		);
	}, [location.pathname]);
	return (
		<>
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
			<LiveAnnouncer visuallyHidden>{navigationAnnouncement}</LiveAnnouncer>
		</>
	);
}
