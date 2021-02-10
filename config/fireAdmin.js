import admin from 'firebase-admin'

import serviceAccount from './serviceAccount.js'
// import * as serviceAccount from ''
// var serviceAccount = require("path/to/serviceAccountKey.json");

const fireAdmin= admin.initializeApp({
  /* enter your keys here */
});
export default fireAdmin