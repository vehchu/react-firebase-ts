// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    // connectFirestoreEmulator,
  } from 'firebase/firestore'
  import {
    getAuth,
    // connectAuthEmulator
    // signInWithCredential,
    // EmailAuthProvider
  } from 'firebase/auth'
import firebaseConfig from './firebaseConfig.json'

// Initialize Firebase
const initFirebase = async () => {
    try {
      const app = initializeApp(firebaseConfig)
      getFirestore(app)
      getAuth(app)
  
      if (process.env.NODE_ENV !== 'production') {
        // connectAuthEmulator(auth, 'http://localhost:9099')
        // connectFirestoreEmulator(firestore, 'localhost', 8080)
        // enableMultiTabIndexedDbPersistence(firestore)
        /**
         * The following code logins the user automatically to speed up development.
         * For this to work you first need to create a user and then run the command
         * yarn emulator:export, then import the data when starting the emulator
         * yarn firebase emulators:start --only firestore,auth --import=firestore_mock_data
         */
        // signInWithCredential(
        //   auth,
        //   EmailAuthProvider.credential('john@doe.com', '123123')
        // )
      }

    } catch (err) {
      console.error(err)
      return err
    }
  }
  
  export default initFirebase