import './ListItem.css';

interface ListItemProps {
	name: string;
}

export function ListItem({ name }: ListItemProps) {
	return <li className="ListItem">{name}</li>;
}
