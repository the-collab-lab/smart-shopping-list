import { Notification } from '../components/Notification';
import './Home.css';

export function Home() {
	return (
		<div className="Home">
			<p>
				I'm the user-friendly onboarding copy that will remain on this page
				throughout the development of the app.
			</p>
			<Notification>
				I'm a brief set of instructions for the Collabies to read as they
				onboard to the app. I can be deleted once the Collabies start digging
				into their issues.
			</Notification>
		</div>
	);
}
