import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.intializeApp({
    apiKey: "AIzaSyCpyYqEmXIKWz4KHG15xb8CBVvvcdA_Q1E",
    authDomain: "todolist-e1ddc.firebaseapp.com",
    databaseURL: "https://todolist-e1ddc.firebaseio.com",
    projectId: "todolist-e1ddc",
    storageBucket: "todolist-e1ddc.appspot.com",
    messagingSenderId: "1006761038558",
    appId: "1:1006761038558:web:871de564cc4fcb0118e84f"
});
export {firebaseConfig as firebase};
