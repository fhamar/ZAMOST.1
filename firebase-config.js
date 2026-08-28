// =====================================
// FHAMAR.ZAMOST Firebase Config
// =====================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpyBWCS7hquXoKcEfGSYDFi7epMNHTTTg",
  authDomain: "zamost1.firebaseapp.com",
  projectId: "zamost1",
  storageBucket: "zamost1.firebasestorage.app",
  messagingSenderId: "660391979595",
  appId: "1:660391979595:web:62389051f81c388505fbce",
  measurementId: "G-PTVR032GDP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
