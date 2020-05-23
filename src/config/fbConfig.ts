require('dotenv').config()

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FB_apiKey,
    authDomain: process.env.FB_authDomain,
    databaseURL: process.env.FB_databaseURL,
    projectId: process.env.FB_projectID,
    storageBucket: process.env.FB_storageBucket,
    messagingSenderId: process.env.FB_messagingSenderID,
    appId: process.env.FB_appId,
    measurementId: process.env.FB_measurementId
  };
firebase.initializeApp(firebaseConfig);
 
export default firebase