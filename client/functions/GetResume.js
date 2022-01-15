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
// app.use(cors())
app.get('/api/resume', (req, res) => {
  let pathToResume = __dirname+'/../src/PDFs/ThomasDoyleResume.pdf'
  try {
    if (fs.existsSync(pathToResume)){
      console.log("This Resume file exists...")
    }
  }
  catch (err) {
    console.log("it doesnt exist")
    return res.status(401)
  }
  var stream = fs.createReadStream(pathToResume)
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