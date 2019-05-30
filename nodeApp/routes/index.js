const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    res.send('Hello from route folder!')
})

router.get('/home', (req, res, next) => {
    res.render('home', null)
})

router.get('/json', (req, res, next) => {
    res.json({
        greeting: "json presents"
    })
})
module.exports = router;