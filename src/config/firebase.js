import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    apiKey: "AIzaSyBKFqaRanoVYTj8PQkSev-ZagYakXA0GCw",
    authDomain: "mood-meter-a5f1e.firebaseapp.com",
    projectId: "mood-meter-a5f1e",
    storageBucket: "mood-meter-a5f1e.appspot.com",
    messagingSenderId: "209122688518",
    appId: "1:209122688518:web:239bc550bb19ce4e760d87"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };