import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore';

const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
apiKey: "AIzaSyCMKjqcuExzGlA47c-VPaPbBpuH-KHSEEQ",
authDomain: "academix-development.firebaseapp.com",
projectId: "academix-development",
storageBucket: "academix-development.appspot.com",
messagingSenderId: "111279454355",
appId: "1:111279454355:web:56b214029d8dd81c39b566"
})

export const auth = app.auth()
export default app
export {firebase}