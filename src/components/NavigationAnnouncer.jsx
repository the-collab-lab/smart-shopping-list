import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './NavigationAnnouncer.css';

const PAGE_TITLE_BY_PATH = {
	list: 'list',
	'add-item': 'add item',
};

export function NavigationAnnouncer() {
	const [message, setMessage] = useState('');
	const location = useLocation();

	useEffect(() => {
		let candidateTitle = location.pathname.slice(1);
		if (candidateTitle === '') {
			candidateTitle = 'home';
		} else {
			candidateTitle = PAGE_TITLE_BY_PATH[candidateTitle];
		}
		setMessage(`Navigated to ${candidateTitle} page – ${document.title}`);
	}, [location.pathname]);

	return (
		<span
			className="Layout-NavigationAnnouncer"
			role="status"
			aria-live="polite"
			aria-atomic="true"
		>
			{message}
		</span>
	);
}
