const mongoose = require("mongoose");

const URL =
  "mongodb+srv://razasalman93:TT3VRVirarbpWeWh@millatcluster.k3stqqq.mongodb.net/millat-test?retryWrites=true&w=majority";
module.exports = () => mongoose.connect(URL);
