
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBVia_mXL3NOIEn06G8UP6ftgy-qFbvMPA',
  authDomain: 'bujasite.firebaseapp.com',
  projectId: 'bujasite',
  storageBucket: 'bujasite.appspot.com',
  messagingSenderId: '1057219382623',
  appId: '1:1057219382623:web:1e042b22f49ce20c043aea',
};
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp };