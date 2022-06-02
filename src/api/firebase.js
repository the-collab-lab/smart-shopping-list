import { initializeApp } from 'firebase/app';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function streamListItems(listId, handleSuccess) {
	const listCollectionRef = collection(db, listId);
	return onSnapshot(listCollectionRef, handleSuccess);
}

export async function addItem(listId, { itemName, daysUntilPurchase }) {
	const listCollectionRef = collection(db, listId);
	// TODO: Replace this call to console.log with the appropriate
	// Firebase function, so this information is sent to your database!
	return console.log(listCollectionRef, {
		dateCreated: new Date(),
		// NOTE: This is null because the item has just been created.
		// We'll put a Date here when the item is purchased!
		dateLastPurchased: null,
		dateNextPurchased: getFutureDate(daysUntilPurchase),
		isActive: false,
		name: itemName,
		totalPurchases: 0,
	});
}

export async function updateItem() {
	/**
	 * TODO: Fill this out so that it uses the correct Firestore function
	 * to update an existing item! You'll need to figure out what arguments
	 * this function must accept!
	 */
}

export async function deleteItem() {
	/**
	 * TODO: Fill this out so that it uses the correct Firestore function
	 * to delete an existing item! You'll need to figure out what arguments
	 * this function must accept!
	 */
}
