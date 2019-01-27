import * as firebase from 'firebase';

const fb = require('firebase');
// Required for side-effects
require('firebase/firestore');


const firebaseConfig = {
  apiKey: 'AIzaSyDa4IEZe1L4ef8ii7QlNOUb9hfMIlQm1rQ',
  authDomain: 'alcocontrol-d2af5.firebaseapp.com',
  databaseURL: 'https://alcocontrol-d2af5.firebaseio.com',
  projectId: 'alcocontrol-d2af5',
  storageBucket: 'alcocontrol-d2af5.appspot.com',
  messagingSenderId: '1070192799184',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = fb.firestore();
db.settings({ timestampsInSnapshots: true });
