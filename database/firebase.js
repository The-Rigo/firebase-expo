import firebase from "firebase";

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA11g8RBT5JsA9WQ6ZbwcqwJ75AiUTysW4",
    authDomain: "react-native-firebase-98b10.firebaseapp.com",
    projectId: "react-native-firebase-98b10",
    storageBucket: "react-native-firebase-98b10.appspot.com",
    messagingSenderId: "138433224154",
    appId: "1:138433224154:web:a1147887a3ca33514f74e3"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default {
    firebase,
    db,
}