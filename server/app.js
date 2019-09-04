const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const mountRoutes = require("./routes")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../', 'client/public')))

mountRoutes(app)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'client/public/index.html'))
})

const port = 3000
const time = new Date(Date.now()).toLocaleString()
app.listen(process.env.PORT || port, () => console.log(`Server started at ${time}`))