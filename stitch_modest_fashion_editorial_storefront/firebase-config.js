// Firebase Configuration and Initialization Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXBLDs_ZKe3Priv-43FzHTZ3M8X4QJT0Y",
  authDomain: "fashion-92789.firebaseapp.com",
  projectId: "fashion-92789",
  storageBucket: "fashion-92789.firebasestorage.app",
  messagingSenderId: "623047515049",
  appId: "1:623047515049:web:2e15660a9c4c193c9d02b8",
  measurementId: "G-8NQSH9341C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  console.warn("Firebase Analytics could not be initialized (e.g. running in an environment without cookies or offline):", e);
}

export { analytics };
console.log("Firebase initialized successfully for HAYA Studio.");
