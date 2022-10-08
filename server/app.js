const express = require('express')
const app = express()
const fs = require('fs')
const axios = require('axios')
const cors = require('cors')
app.use(cors())
app.use(express.static('./dist/'))
app.get('/', (req, res) => {
  const htmlStr = fs.readFileSync('./dist/index.html')
  res.end(htmlStr)
})
app.get('/:location', async (req, res) => {
  const queryStr = req.params.location
  const { data } = await axios.get(`https://api.caiyunapp.com/v2.6/WY0P3HbGXtPyJYJ2/${queryStr}/weather?alert=true&dailysteps=16&hourlysteps=24`)
  res.send(data)
})

app.listen(8001)