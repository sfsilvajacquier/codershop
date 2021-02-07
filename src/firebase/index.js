import * as firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDFykLjeetYXx8aprxohiScVYgbJ1FI6ak",
    authDomain: "codershop-sfsj.firebaseapp.com",
    projectId: "codershop-sfsj",
    storageBucket: "codershop-sfsj.appspot.com",
    messagingSenderId: "245975057717",
    appId: "1:245975057717:web:3c4a685d716c191a7df87c"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
};

export function getFirestore() {
    return firebase.firestore(app);
};