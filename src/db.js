import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const db = firebase.initializeApp({
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY
}).firestore()

/**
 * TODO: Убрать временную аутентификацию
 */
export const auth = () => firebase.auth()
  .signInWithEmailAndPassword('rshaibakov@gmail.com', '420291')
