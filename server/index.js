// Basic Express Server
// Not strictly necessary for site,
// More so just to practice deploying backend 
// as well as frontend

// I've eventually moved to Lambda functions over a server
// This file is not run in production build, see the client/functions directory

import express from 'express'
import bodyParser from 'body-parser'
// import { Mongoose } from 'mongoose';
// import cors from 'cors';
import fs from 'fs'
const app = express()
app.use(express.static('../client/build'))

app.get('/api/testHTML', (req, res) => {
  res.setHeader('Content-type', 'text/html')
  res.send('<h1>YOoooo</h1>')
})

app.get('/api/resume', (req, res) => {
  var stream = fs.createReadStream('./PDFs/ThomasDoyleResume.pdf')
  var filename = 'ThomasDoyleResume.pdf'
  filename = encodeURIComponent(filename)
  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')
  stream.pipe(res)
  console.log('Resume fetched from API at ' + new Date())
})
const PORT = process.env.PORT || 3001
app.use(bodyParser.json({ limit: '30mb', extended: true }))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
