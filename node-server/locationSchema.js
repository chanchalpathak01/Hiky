//locationModel.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  loc_id: Number,
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  place: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  coordinate: {
    type: [Number],
    required: true
  },
  imgname: String,
  info: {
    // highlight: {
    //   type: [String],
    //   required: true
    // },
    fulldescription: {
      type: [String],
      required: true
    },
    Duration: String,
    Distance: String,
    Difficulty: String,
    Price: Number
  },
  itinary : {
    type: [String],
    required: true
  },
  fitnessAndEndurance : String,
  distanceFromMumbai : {
    type: String,
    required: true
  },
  distanceFromPune : {
    type: String,
    required: true
  },
  attractions :{
    type: [String],
    required: true
  },
  thingstocarry: {
    type: [String],
    required: true  
  },
  safetyAdvisory: {
    type: [String],
    required: true
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
