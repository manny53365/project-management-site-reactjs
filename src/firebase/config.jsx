import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAWeSL9bhBbfEWeX21yoV6u1e0DpFaG49w",
    authDomain: "project-management-site-98c19.firebaseapp.com",
    projectId: "project-management-site-98c19",
    storageBucket: "project-management-site-98c19.appspot.com",
    messagingSenderId: "183596190696",
    appId: "1:183596190696:web:9d718547797392814b725d",
    measurementId: "G-C0BK2GTEJD"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp};
