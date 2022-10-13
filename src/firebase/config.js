import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDBY5gjG7XEdp-BMoyZYOLu4YaBS6VUL1Y",
    authDomain: "readinglistapp-9478f.firebaseapp.com",
    projectId: "readinglistapp-9478f",
    storageBucket: "readinglistapp-9478f.appspot.com",
    messagingSenderId: "84146231097",
    appId: "1:84146231097:web:b01f8d6770810b8af07ae8"
  };

initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

export { db, auth }