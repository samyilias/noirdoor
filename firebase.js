import * as admin from 'firebase-admin';
import dre from "./music/dre";
const serviceAccount = require('./firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://noirdoor-7d63d.firebaseio.com/',
  storageBucket:"gs://noirdoor-7d63d.appspot.com"
});

console.log("hey")
