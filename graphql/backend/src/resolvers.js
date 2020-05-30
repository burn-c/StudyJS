const Question = require('./Question')



module.exports = {
  Query: {
    questions: () => Question.find(),
    question: (_, { id }) => Question.findById(id),
  },

  Mutation: {
    createQuestion:  (_, { title, answers }) => Question.create({ title, answers }),
  },
};
