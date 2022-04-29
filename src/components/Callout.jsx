import './Callout.css';

export function Callout({ className, children, ...rest }) {
	return (
		<div className="Callout" {...rest}>
			<p className="Callout-text">{children}</p>
		</div>
	);
}
