const mongoose = require('mongoose')

const AnswerSchema = new mongoose.Schema({
  title: String
});

const QuestionSchema = new mongoose.Schema({
  title: String,
  answers: [String]
});

module.exports = mongoose.model('Question', QuestionSchema)
