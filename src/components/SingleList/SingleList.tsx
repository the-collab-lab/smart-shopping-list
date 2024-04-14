import { Dispatch, SetStateAction } from 'react';
import './SingleList.css';

interface SingleListProps {
	name: string;
	path: string;
	setListPath: Dispatch<SetStateAction<string>>;
}

export function SingleList({ name, path, setListPath }: SingleListProps) {
	function handleClick() {
		setListPath(path);
	}

	return (
		<li className="SingleList">
			<button onClick={handleClick}>{name}</button>
		</li>
	);
}
