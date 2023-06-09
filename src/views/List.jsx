import { ListItem } from '../components';

export function List({ data }) {
	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
			</p>
			<ul>
				{/**
				{new Array(100).fill(null).map((_, i) => (
				 * TODO: write some JavaScript that renders the `data` array
					<li style={{ fontSize: '2em' }}>item {i}</li>
				 * using the `ListItem` component that's imported at the top
				))}
				 * of this file.
				 */}
			</ul>
		</>
	);
}
