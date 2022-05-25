import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './NavigationAnnouncer.css';

export function NavigationAnnouncer() {
	const [message, setMessage] = useState('');
	const location = useLocation();

	useEffect(() => {
		let candidateTitle = location.pathname.slice(1);
		if (candidateTitle === '') {
			candidateTitle = 'home';
		} else {
			candidateTitle = candidateTitle.replace('-', ' ');
		}
		setMessage(`Navigated to ${candidateTitle} page – ${document.title}`);
	}, [location.pathname]);

	return (
		<span
			className="NavigationAnnouncer"
			role="status"
			aria-live="polite"
			aria-atomic="true"
		>
			{message}
		</span>
	);
}
