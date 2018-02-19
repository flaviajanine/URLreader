var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var URLSchema = new Schema({
  name: String,
  url: String,
});

var Url = mongoose.model("Url", URLSchema);
module.exports = Url;