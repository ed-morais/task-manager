const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name cannot be more than 20 characteres']
  },
  completed: {
    tyoe: Boolean,
    default: true
  }
})

module.exports = mongoose.model('Task', TaskSchema)
