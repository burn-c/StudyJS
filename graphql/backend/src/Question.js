const mongoose = require('mongoose')


const QuestionSchema = new mongoose.Schema({
  title: String,
  answers: [String]
});

module.exports = mongoose.model('Question', QuestionSchema)
