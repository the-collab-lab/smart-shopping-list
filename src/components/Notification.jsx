import { useState } from 'react';
import CloseIcon from '../assets/close-icon.svg';
import './Notification.css';

export function Notification({ className, children, ...rest }) {
	const [dismissed, setDismissed] = useState(false);
	return (
		!dismissed && (
			<div className="Notification" role="status" {...rest}>
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
