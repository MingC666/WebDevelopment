const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const fs = require('fs');
const PORT = 3000;

const app = express()

app.use(bodyParser())
app.use(cors())
app.use(express.static('public'))


app.get("/", (req, res) => {
    res.render('index', { name: "MING", pic: "pic/tiaowu.gif" })
})

app.get("/jquery", (req, res) => {
    fs.readFile('../JQueery/DOM/dom.html', (err, data)=>{
        if(err){
            releaseEvents.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 Not Found");
        }
    })
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.listen(PORT, function () {
    console.log("Start server in port " + PORT);
});