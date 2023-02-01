// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6z5a-Vr4O-x6qLs1AbsnuWQKvw6AQfCc',
  authDomain: 'instagram-clone-b10ab.firebaseapp.com',
  projectId: 'instagram-clone-b10ab',
  storageBucket: 'instagram-clone-b10ab.appspot.com',
  messagingSenderId: '64325569874',
  appId: '1:64325569874:web:a358025be51cf6a451fe8b',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
