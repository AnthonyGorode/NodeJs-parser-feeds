const functions = require('firebase-functions');
const app = require("./app");

exports.parser_feeds_api = functions.https.onRequest(app);
