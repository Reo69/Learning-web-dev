const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const users = [] //Local variable to store user information

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {

})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.post('/signup', async (req, res) => {
    try{
            const hashedPassword = await bcrypt.hash(req.body.passoword, 10)
            users.push({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                passoword: hashedPassword
            })
            res.redirect("/login")
    }
    catch{
            res.redirect("/signup")
    }
    console.log(users)
})

app.listen(3000)