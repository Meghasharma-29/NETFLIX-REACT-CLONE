import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDaks_ci5TYrQonRM-HcjWUVjZg5X1KuUE",
  authDomain: "netflix-clone-8f13d.firebaseapp.com",
  projectId: "netflix-clone-8f13d",
  storageBucket: "netflix-clone-8f13d.appspot.com",
  messagingSenderId: "41234542359",
  appId: "1:41234542359:web:46f9dddefffa5352eb5152"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app); 