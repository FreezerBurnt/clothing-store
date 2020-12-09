import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDh1ms_9l01mejb_y8lpT075IlBEEK4GB8",
    authDomain: "clothing-store-36a8c.firebaseapp.com",
    projectId: "clothing-store-36a8c",
    storageBucket: "clothing-store-36a8c.appspot.com",
    messagingSenderId: "913018061878",
    appId: "1:913018061878:web:65a2cd21dd848c78f50497"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase