const mongoose = require('mongoose')

const quizzSchema = new mongoose.Schema({
title : {
    type: String,
    required: true,
    index: true
},
question: {
    type: String,
    required: true
},
answer: {
    type: String,
    required: true,
},
suggestion: {
    type: String,
    required: true
}
})

module.exports = mongoose.model('Quizz', quizzSchema)