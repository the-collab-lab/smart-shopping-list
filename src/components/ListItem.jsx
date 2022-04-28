import './ListItem.css';

export function ListItem({ id, isActive, name }) {
	const idSlug = `cb-${id}`;
	return (
		<li className="ListItem">
			<input type="checkbox" id={idSlug} className="ListItem-checkbox" />
			<label className="ListItem-label" htmlFor={idSlug}>
				{name}
			</label>
		</li>
	);
}
