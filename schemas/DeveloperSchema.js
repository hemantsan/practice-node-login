const mongoose = require('mongoose');

const DeveloperSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  location: String,
  skill: String,
  experience: String,
});

const Developer = mongoose.model('Developer', DeveloperSchema);

module.exports = Developer;
