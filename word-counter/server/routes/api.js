
const express = require('express')
const router = express.Router()

const wordCounter = {}

router.get('/words/:word', function (req, res) {
    const someWord = req.params.word
    if (wordCounter[someWord]) {
        res.send({ count: wordCounter[someWord] })
    } else {
        res.send({ count: 0 })
    }
    console.log('Server up and running')
})

router.post('/words/:word', function (req, res) {
    const potWord = req.params.word
    if (wordCounter[potWord]) {
        wordCounter[potWord]++
    } else {
        wordCounter[potWord] = 1
    }
    res.send({ text: `Added ${potWord}`, currentCount: wordCounter[potWord] })
})

router.post('/words/:sentence', function (req, res) {
    const words = req.params.sentence.split(" ")
    let numNewWords = 0
    let numOldWords = 0
    for (word of words) {
        if (wordCounter[word]) {
            wordCounter[word]++
            numOldWords++
        } else {
            wordCounter[word] = 1
            numNewWords++
        }
    }
    res.send({text:`Added ${numOldWords} words,${numOldWords} already 
    existed`,currentCount: -1})
})

router.get('/words/total',function(){
    for (word of wordCounter){
        su
    }
})

module.exports = router
