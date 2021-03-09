var { createServer } = require('http');
const path = require('path')
var express = require('express');
const app = express()
const server = createServer(app);
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/test',(req,res) => {
  console.log(req.body.test)
  res.send('123123')
})

server.listen(8090, () => {
  console.log(8090, '8090'); // lhy-log
})