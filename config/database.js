const mongoose = require('mongoose');


const databaseURL = "mongodb+srv://narasimha007:9481285088@narasimhamaiyagscluster.samkt.mongodb.net/devtinder"

async function connectToDB() {
  await mongoose.connect(databaseURL);
}

module.exports = connectToDB