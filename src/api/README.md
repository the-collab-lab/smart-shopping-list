# The `api` folder

The `firebase.js` file contains all of the functions that communicate with your Firestore database. Think of it as the home base for the shopping list API. React components that need to communicate with your Firestore database should import a function defined here; they should _never_ import any modules in the `firebase/firestore` package directly.
