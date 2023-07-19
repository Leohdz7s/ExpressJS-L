const { initializeApp, cert, database } = require("firebase-admin");

const serviceAccount = require("../../utils/constanst/firebase-admin.json.json");

const app = initializeApp({
  credential: cert(serviceAccount),
    databaseURL: "https://pagdcts.firebaseio.com"
});

module.exports = app;