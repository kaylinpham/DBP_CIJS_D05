import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD27gAAerLYXkS8fnh8bssocBBeInj_ZeQ",
  authDomain: "dbp-cijs-d05-bd74a.firebaseapp.com",
  databaseURL: "https://dbp-cijs-d05-bd74a.firebaseio.com",
  projectId: "dbp-cijs-d05-bd74a",
  storageBucket: "dbp-cijs-d05-bd74a.appspot.com",
  messagingSenderId: "832657027394",
  appId: "1:832657027394:web:6533a28aedb4a9a5d9d8db",
  measurementId: "G-WJCNPTMPEB",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
