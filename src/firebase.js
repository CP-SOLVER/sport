import firebase from './firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD_v_2IaYHzOx9bCw2emcNP3fHrYGKc4ho",
    authDomain: "sport-eacf2.firebaseapp.com",
    projectId: "sport-eacf2",
    storageBucket: "sport-eacf2.appspot.com",
    messagingSenderId: "795686044467",
    appId: "1:795686044467:web:50d4dc59850dc55ad27446",
    measurementId: "G-BDSB1TCDQQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db