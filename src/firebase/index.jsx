import firebase from "firebase/app";
import "@firebase/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyDIeR8d5Qh93J45IfVgpahHV3JWLvpZPVU",
    authDomain: "spotba-e10b0.firebaseapp.com",
    projectId: "spotba-e10b0",
    storageBucket: "spotba-e10b0.appspot.com",
    messagingSenderId: "685829136618",
    appId: "1:685829136618:web:a8f4c3a3ee6e43cff57793"
})

export const getFirestore = () => {
    return firebase.firestore(app)
}