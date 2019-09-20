require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')
const ctrl = require('./controller')

app.use(express.json())

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} artists at Coachella`))
})
