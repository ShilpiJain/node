const express = require('express')
const path = require('path')

const app = express()


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)

app.get('/',(reg, res, next) => {
    res.send('HELLO')
});

app.get('/json',(reg, res, next) => {
    const data = {
        greeting:'hello!!'
    }
    res.json(data)
});
app.get('/home', (req, res, next) => {
    res.render('home', null)
})
app.listen(3000); // Port Number