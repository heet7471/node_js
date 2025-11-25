const express = require('express')
const app = express()
const db = require('./config/db')
const user = require('./UserModel/usermodel')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')


app.post('/insertData', async (req, res) => {
    try {
        const data = await user.create(req.body)
        res.send(data)
    } catch (err) {
        res.send(err)
    }
})




app.get('/', async (req, res) => {
    try {
        const user1 = await user.find({})
 
        res.render('home', { user1 })
    } catch (err) {
        res.send(err)
    }
})

app.listen(3100, () => {
    console.log('Server Listening on 3100')
})