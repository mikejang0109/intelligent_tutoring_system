const admin = require('firebase-admin');
const ObjectsToCsv = require('objects-to-csv');
let serviceAccount = require('./service-account-credentials.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

console.log("Fetching data from Firebase...");

function getDate() {
  var today = new Date();
  return (today.getMonth() + 1) + '-' +
    today.getDate() + '-' +
    today.getFullYear() + "_" +
    today.getHours() + "_" +
    today.getMinutes() + "_" +
    (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds())
}

function readData(collection) {
  db.collection(collection).get().then(snapshot => {
    var data = []
    snapshot.forEach(doc => {
      data.push(doc.data());
    })
    const csv = new ObjectsToCsv(data);
    csv.toDisk('./logs/log-' + getDate() + '.csv');
    return data;
  }).catch(err => {
    console.log("Could not read data from " + collection + ". Make sure the collection exists and you have read permission.");
  });
}

var fs = require('fs');
var dir = './logs';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

var data = readData("problemSubmissions");

