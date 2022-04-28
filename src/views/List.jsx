import { useEffect, useState } from 'react';
import { streamListItems } from '../api';
import { ListItem } from '../components/ListItem';

export function List({ listToken }) {
	const [data, setData] = useState([]);

	useEffect(() => {
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
		<ul>
			{data.map((item) => {
				return <ListItem key={item.id} id={item.id} name={item.name} />;
			})}
		</ul>
	);
}
