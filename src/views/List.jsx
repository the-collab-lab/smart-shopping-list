import { useEffect, useState } from 'react';
import { streamListItems } from '../api';
import { ListItem } from '../components/ListItem';

export function List({ listToken }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (!listToken) return;

		return streamListItems(listToken, (querySnap) => {
			const nextData = [];
			querySnap.docs.forEach((docRef) => {
				const data = docRef.data();
				data.id = docRef.id;
				nextData.push(data);
			});
			setData(nextData);
		});
	}, [listToken]);

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
