const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pic: {
    type: String,
    default: "/food.jpg"
  },
  cuisines: {
    type: String,
    required: true
  },
  city: {
    type: String,
    default: 'Miami'
  },
  state: { type: String, default: 'FL' },
  founded: {
    type: Number,
    max: [new Date().getFullYear(), "can't found it in the future"]
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)