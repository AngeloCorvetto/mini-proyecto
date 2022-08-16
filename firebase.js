// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDODzZ_TApNBL2uM0V79g93dVXjNlBD_Ik",
  authDomain: "fir-auth-523c5.firebaseapp.com",
  projectId: "fir-auth-523c5",
  storageBucket: "fir-auth-523c5.appspot.com",
  messagingSenderId: "521758921694",
  appId: "1:521758921694:web:cfed62e6685077ea05034f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };

//export const db = getFirestore(app);
