import firebase from './firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCf9LD4HKV4BhTihdUHis8kEUhfXB1aJ6w",
    authDomain: "sport-2382d.firebaseapp.com",
    projectId: "sport-2382d",
    storageBucket: "sport-2382d.appspot.com",
    messagingSenderId: "831588712359",
    appId: "1:831588712359:web:273a54a390f5498f058082",
    measurementId: "G-CT2H9DF9RX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db