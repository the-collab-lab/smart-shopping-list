import { useState } from 'react';
import CloseIcon from '../assets/close-icon.svg';
import './Notification.css';

export function Notification({ className, children, kind, ...rest }) {
	const [dismissed, setDismissed] = useState(false);
	let classList = 'Notification';
	if (kind === 'error') {
		classList += ' Notification--error';
	}
	return (
		!dismissed && (
			<div className={classList} role="status" {...rest}>
				<div className="Notification-body">{children}</div>
				<button
					className="Notification-btn"
					onClick={() => setDismissed(true)}
					aria-label="Dismiss"
				>
					<CloseIcon aria-hidden="true" />
				</button>
			</div>
		)
	);
}
