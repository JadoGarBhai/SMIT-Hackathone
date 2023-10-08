// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAve_QGLPBFtwN5pUlJm2Y0VVDDgRv6NhQ",
  authDomain: "hackathone-project-01.firebaseapp.com",
  projectId: "hackathone-project-01",
  storageBucket: "hackathone-project-01.appspot.com",
  messagingSenderId: "624714646423",
  appId: "1:624714646423:web:08c38d34bf4ba79be63ad2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
