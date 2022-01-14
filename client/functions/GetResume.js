// Netlify Function
// Serves a PDF File 

const express = require ('express')
const bodyParser = require ('body-parser')
const serverless = require ('serverless-http')
const fs = require ('fs')
// const { Mongoose } = require 'mongoose';
const cors = require ('cors');
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.get('/api/resume', cors(), (req, res) => {
  var stream = fs.createReadStream('../src/PDFs/ThomasDoyleResume.pdf')
  var filename = 'ThomasDoyleResume.pdf'
  filename = encodeURIComponent(filename)
  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')
  stream.pipe(res)
  console.log('Resume fetched from API at ' + new Date())
})
app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.listen(PORT, console.log("server listeneing"))
exports.handler = serverless(app)