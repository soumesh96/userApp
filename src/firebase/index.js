import firebase from 'firebase';
import 'firebase/firestore';

const DevConfig = {
    apiKey: "AIzaSyDIe9PBvjZ1_Ybju_UurOMk8cXZuo5PDY4",
    authDomain: "userapp-69d00.firebaseapp.com",
    databaseURL: "https://userapp-69d00.firebaseio.com",
    projectId: "userapp-69d00",
    storageBucket: "userapp-69d00.appspot.com",
    messagingSenderId: "805981481707",
    appId: "1:805981481707:web:55541303adc6ea3c50ecae",
    measurementId: "G-YR6EH41NH2"
};

firebase.initializeApp(DevConfig);

const auth = firebase.auth();

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true,
});

export default firebase;
export {
    auth,
    db,
};