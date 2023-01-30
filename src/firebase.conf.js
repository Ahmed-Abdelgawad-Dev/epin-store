import { collection, doc, getDocs, getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID
} = process.env;
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const product_col = collection(db, "Tamim", "first", "products");
export const order_col = collection(db, "Tamim", "first", "orders");
export const getDocRef = (id) => doc(db, "Tamim", "first", "products", id);