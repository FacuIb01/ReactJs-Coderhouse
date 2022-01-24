import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_ExE25kH2oY9NAfB16hGNwjmporJoL9o",
  authDomain: "overpowerstore-98f50.firebaseapp.com",
  projectId: "overpowerstore-98f50",
  storageBucket: "overpowerstore-98f50.appspot.com",
  messagingSenderId: "6253359701",
  appId: "1:6253359701:web:75f3ea1b11691384b59adc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)