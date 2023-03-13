const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const PORT = 3000;

const app = express()

app.use(bodyParser())
app.use(cors())
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('index', { name: "MING", pic: "pic/tiaowu.gif" })
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(PORT, function () {
    console.log("Start server in port " + PORT);
});