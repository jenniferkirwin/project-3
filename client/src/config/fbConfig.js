import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCOo5Kt8rWyOfP0WFTNsURcQsLi6L8TLCQ",
    authDomain: "user-management-system-2020.firebaseapp.com",
    databaseURL: "https://user-management-system-2020.firebaseio.com",
    projectId: "user-management-system-2020",
    storageBucket: "user-management-system-2020.appspot.com",
    messagingSenderId: "141821558562",
    appId: "1:141821558562:web:9a709f7e0a58b254142f7b",
    measurementId: "G-WXWB1XTZLR"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;