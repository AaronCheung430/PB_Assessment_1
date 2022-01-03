const express = require('express')
const app = express()

app.get('/', function(req, resp){
   resp.send('Hello')
})

app.listen(8090)

