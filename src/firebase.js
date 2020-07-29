import firebase from 'firebase/app'
import 'firebase/firestore'

//  credentials
var firebaseConfig = {
    apiKey: "AIzaSyDN_kXiTzoeCF-T2ZcEPXf-IZVN2z8RWt0",
    authDomain: "fir-reactcrud-ec783.firebaseapp.com",
    databaseURL: "https://fir-reactcrud-ec783.firebaseio.com",
    projectId: "fir-reactcrud-ec783",
    storageBucket: "fir-reactcrud-ec783.appspot.com",
    messagingSenderId: "39517373815",
    appId: "1:39517373815:web:2a9aabdbf8350531084d72",
    measurementId: "G-PLX4X2QYWW"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()

 
