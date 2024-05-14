import { Dispatch, SetStateAction } from 'react';
import './Home.css';
import { SharedList } from '../../api/firebase';

interface HomeProps {
	data: SharedList[];
	setListPath: Dispatch<SetStateAction<string | null>>;
}

export function Home({ data, setListPath }: HomeProps) {
	console.log('remove this!', { data, setListPath });

	return (
		<div className="Home">
			<p>
				Hello from the home (<code>/</code>) page!
			</p>
			<ul>
				{/**
				 * TODO: write some JavaScript that renders the `lists` array
				 * so we can see which lists the user has access to.
				 */}
			</ul>
		</div>
	);
}
