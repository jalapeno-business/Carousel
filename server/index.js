const express = require('express')
const app = express()
const db = require('../database/index.js')


//get request 
app.get('/api/carousel', (req, res) => {
    db.get((err, data) => {
        if (err) {
            console.log("get error from EXPRESS GET")
        } else {
            res.send(data)
        }
    })
    
})

//listening on
let PORT = process.env.PORT || 8888;
app.listen(PORT, (error) => {
    if(error) {
        console.log(`NOT LISTENING TO PORT ${PORT}`)
    } else {
        console.log(`LISTENING TO PORT ${PORT}`)
    }
})

