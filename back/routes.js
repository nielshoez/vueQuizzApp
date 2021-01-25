const router = require('express').Router()
const Quizz = require('./model')
const bodyParser = require('body-parser')


var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.json({title: 'API', description:'is working'})  
})

router.get('/create', (req, res) => {
    res.json({msg: 'this is working just fine'})
})

router.post('/create', urlencodedParser, (req, res) => {
    console.log(req.body)
    var quizz = new Quizz();
    quizz.title = req.body.title
    quizz.question = req.body.question
    quizz.answer = req.body.answer
    quizz.suggestion = req.body.suggestion
    quizz.save((err)=> {
        if (err)
            res.json(err)
        else {
            res.json({
                message: 'new quizz created',
                data : quizz
            })
        }
    })
})

router.get('/quizz', (req,res) => {
    Quizz.find({}, function(err, quizzs) {
        var quizzMap = {};
    
        quizzs.forEach(function(quizz) {
          quizzMap[quizz._id] = quizz;
        });
    
        res.send(quizzMap);
      });
})

module.exports = router