import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCOo5Kt8rWyOfP0WFTNsURcQsLi6L8TLCQ",
  authDomain: "user-management-system-2020.firebaseapp.com",
  databaseURL: "https://user-management-system-2020.firebaseio.com",
  projectId: "user-management-system-2020",
  storageBucket: "user-management-system-2020.appspot.com",
  messagingSenderId: "141821558562",
  appId: "1:141821558562:web:0f2e24eaa78ea50a142f7b",
  measurementId: "G-Y8HPQQJFVW"
};
firebase.initializeApp(firebaseConfig);

export default firebase;