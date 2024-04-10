import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd7nF5TKA1xQ-jalKDvyJEzOXijRRlK8M",
  authDomain: "lang-912d1.firebaseapp.com",
  projectId: "lang-912d1",
  storageBucket: "lang-912d1.appspot.com",
  messagingSenderId: "214199481644",
  appId: "1:214199481644:web:53d0fa6c2b67f2754e2889",
};
export const appFireBase = initializeApp(firebaseConfig);

export const authFireBase = getAuth(appFireBase);
