// Netlify Function
// Serves a PDF File 

import express from 'express'
import bodyParser from 'body-parser'
import serverless from 'serverless-http'
import fs from 'fs'
// import { Mongoose } from 'mongoose';
import cors from 'cors';
// const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.get('/api/resume', cors(), (req, res) => {
  var stream = fs.createReadStream('./PDFs/ThomasDoyleResume.pdf')
  var filename = 'ThomasDoyleResume.pdf'
  filename = encodeURIComponent(filename)
  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')
  stream.pipe(res)
  console.log('Resume fetched from API at ' + new Date())
})
app.use(bodyParser.json({ limit: '30mb', extended: true }))

exports.handler = serverless(app)