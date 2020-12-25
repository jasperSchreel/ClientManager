import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyAYdnOTFldEuQK9jUvi6LuP01CT9MNp9y8",
    authDomain: "client-manager-a5165.firebaseapp.com",
    projectId: "client-manager-a5165",
    storageBucket: "client-manager-a5165.appspot.com",
    messagingSenderId: "1011042098532",
    appId: "1:1011042098532:web:d18b7c8a42a6ec29fcae71",
    measurementId: "G-WNHD38BVEV"
  }
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references 
// TODO setup correct references
const usersCollection = db.collection('users')
const patientsCollection = db.collection('patients')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  patientsCollection
}