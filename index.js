const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 80

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('teste ok').end()

})


app.listen(port, () => {
    console.log(`Running on  ${port}`)
})

