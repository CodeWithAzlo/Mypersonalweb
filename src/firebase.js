
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcZB1M87HnvZsTnWh87XBt0UNBnN4QKVI",
  authDomain: "my-profolio-ef796.firebaseapp.com",
  projectId: "my-profolio-ef796",
  storageBucket: "my-profolio-ef796.appspot.com",
  messagingSenderId: "1027933604970",
  appId: "1:1027933604970:web:853347e607ee1610ffce13"
};


 export const app = initializeApp(firebaseConfig);
export  const db = getFirestore()