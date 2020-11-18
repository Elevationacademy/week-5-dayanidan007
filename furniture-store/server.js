const store = [
    { name: ":table", inventory: 3, price: 800 },
    { name: ":chair", inventory: 16, price: 120 },
    { name: ":couch", inventory: 1, price: 1200 },
    { name: ":picture frame", inventory: 31, price: 70 }
]

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


let smooth = {}
app.get('/priceChek/:name', function (request, response) {
    for (let i = 0; i < store.length; i++) {
        if (request.params.name == store[i].name) {
            smooth.price = store[i].price
            response.send(smooth)
        } else {
            smooth.price = "Undefined"
            response.send(smooth)
        }
    }
}
)
let data = ``
app.get('/buy/:name', function (request, response) {
    for (let i = 0; i < store.length; i++) {
        if (request.params.name == store[i].name) {
            store[i].inventory--
            data = `Congratulations, you've just bought 
            ${store[i].name} for ${store[i].price}. There are ${store[i].inventory} 
            left now in the store.`
            response.send(data)
        } else {
            data = `you've no buy nothing`
            response.send(data)
        }
    }
}
)

app.get('/sale/:admin', function (request, response) {
    if (request.params.admin === 'true') {
        response.send('ho ya')
    }
})


const port = 3000
app.listen(port, function () {
    console.log(`Server is up and running smoothly`)
})