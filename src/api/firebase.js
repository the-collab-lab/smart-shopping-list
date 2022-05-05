import { initializeApp } from 'firebase/app';
import {
	collection,
	getFirestore,
	onSnapshot,
	orderBy,
	query,
} from 'firebase/firestore';

import { getFutureDate } from '../utils';

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

export function streamListItems(listId, handleSuccess) {
	const itemsQuery = query(
		collection(db, listId),
		orderBy('createdAt', 'desc'),
	);
	return onSnapshot(itemsQuery, handleSuccess);
}

export async function addItem(listId, { itemName, daysUntilPurchase }) {
	const listCollectionRef = collection(db, listId);
	// TODO: Replace this call to console.log with the appropriate
	// Firebase function, so this information is sent to your database!
	return console.log(listCollectionRef, {
		createdAt: new Date(),
		isActive: false,
		// NOTE: This is null because the item has just been created.
		// We'll put a Date here when the item is purchased!
		lastPurchasedAt: null,
		name: itemName,
		nextPurchaseAt: getFutureDate(daysUntilPurchase),
		totalPurchases: 0,
	});
}
