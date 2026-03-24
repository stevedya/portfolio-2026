import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBQ4Y7gORT2qdaQkFhII6gxIjIZUzwAkjs',
  authDomain: 'portfolio-fd819.firebaseapp.com',
  projectId: 'portfolio-fd819',
  storageBucket: 'portfolio-fd819.firebasestorage.app',
  messagingSenderId: '23925687804',
  appId: '1:23925687804:web:44cfe8cacae106b7525e79',
  measurementId: 'G-ZHP2T22W0L',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const db = getFirestore(app)
