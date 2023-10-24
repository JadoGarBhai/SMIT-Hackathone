import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
const firestore = getFirestore(app);
export { firestore };
