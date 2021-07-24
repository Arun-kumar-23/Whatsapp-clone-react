import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCXHFFcTKtK3IXdR8gFJrxvipCU_n38cD4",
  authDomain: "whatsapp-clone-react-19bba.firebaseapp.com",
  projectId: "whatsapp-clone-react-19bba",
  storageBucket: "whatsapp-clone-react-19bba.appspot.com",
  messagingSenderId: "147040150602",
  appId: "1:147040150602:web:b8c53e37f946cd38daf2b3",
  measurementId: "G-KXCY33YHRN"
}

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider} 
  export default db