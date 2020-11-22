const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
app.use('/', api);

const port = 3000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})

