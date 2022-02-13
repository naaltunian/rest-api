require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))