import './LiveAnnouncer.css';

export function LiveAnnouncer({ children, visuallyHidden }) {
	let classList = 'LiveAnnouncer';
	if (visuallyHidden === true) {
		classList += 'LiveAnnouncer--visuallyhidden';
	}

	return (
		<div
			className={classList}
			role="status"
			aria-live="polite"
			aria-atomic="true"
		>
			{children}
		</div>
	);
}
