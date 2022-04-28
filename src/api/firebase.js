import { initializeApp } from 'firebase/app';
import {
	collection,
	getFirestore,
	onSnapshot,
	query,
	where,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBkAgJqEvPAuUV5dzG8zyEzjlFFsDwf2uo',
	authDomain: 'tcl-shopping-list-ej.firebaseapp.com',
	databaseURL: 'https://tcl-shopping-list-ej.firebaseio.com',
	projectId: 'tcl-shopping-list-ej',
	storageBucket: 'tcl-shopping-list-ej.appspot.com',
	messagingSenderId: '589248305634',
	appId: '1:589248305634:web:6203eec343233bf60301bb',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const itemsCollectionRef = collection(db, 'items');

export function streamListItems(listId, handleSuccess) {
	const itemsQuery = query(itemsCollectionRef, where('listId', '==', listId));
	return onSnapshot(itemsQuery, handleSuccess);
}

export function addItem(listToken, { itemName, estimate }) {
	// TODO: Replace this with a call to the appropriate Firebase functions,
	// so this information is sent to your database. Remember to use
	// the object shape described in the docs!

	console.log(
		`Adding item '${itemName}' with estimated purchase window of ${estimate} to list '${listToken}'!`,
	);
}
