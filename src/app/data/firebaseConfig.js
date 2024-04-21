import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCtesVKvjC0ySaFEaSpLuOnjLSOaZc2Duo",
  authDomain: "powerliftpal-pwa.firebaseapp.com",
  databaseURL: "https://powerliftpal-pwa-default-rtdb.firebaseio.com/",
  projectId: "powerliftpal-pwa",
  storageBucket: "powerliftpal-pwa.appspot.com",
  messagingSenderId: "4436221320",
  appId: "1:4436221320:web:b2a7cac158eafde1d9ee3d",
  measurementId: "G-H01Z0EVZYE"
};

// Initialize Firebase with the provided settings
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Retrieve the Firebase Real-time Database instance
const database = getDatabase(app);

// Export the database for use elsewhere in your project
export { database };