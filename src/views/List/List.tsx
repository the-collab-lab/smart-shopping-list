import { DocumentData } from 'firebase/firestore';

interface ListProps {
	data: DocumentData[];
}

export function List({ data }: ListProps) {
	console.log('remove this!', { data });

	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
			</p>
			<ul>
				{/**
				 * TODO: write some JavaScript that renders the `data` array
				 * using the `ListItem` component that's imported at the top
				 * of this file.
				 */}
			</ul>
		</>
	);
}
