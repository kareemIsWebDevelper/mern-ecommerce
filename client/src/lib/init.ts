// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4KBJdYce-LuRMfaK_NkkowtzjctrN-Cg",
  authDomain: "ecommerce-60d74.firebaseapp.com",
  projectId: "ecommerce-60d74",
  storageBucket: "ecommerce-60d74.appspot.com",
  messagingSenderId: "106498120301",
  appId: "1:106498120301:web:44cbb2c80923bce76dfd64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
