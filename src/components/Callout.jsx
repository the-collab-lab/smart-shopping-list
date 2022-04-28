import './Callout.css';

export function Callout({ children, style }) {
	return (
		<div className="Callout" style={style}>
			{children}
		</div>
	);
}
