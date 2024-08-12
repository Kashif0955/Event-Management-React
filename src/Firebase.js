import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxOT6t0ayX8MLHhX0pZ-HrcyoUIYhkp-I",
  authDomain: "event-managment-react.firebaseapp.com",
  projectId: "event-managment-react",
  storageBucket: "event-managment-react.appspot.com",
  messagingSenderId: "749800446987",
  appId: "1:749800446987:web:de183c1837b528908bbb0e",
  measurementId: "G-JXQ28YHRG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
