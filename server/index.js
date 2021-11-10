import express from 'express';
import bodyParser from 'body-parser';
// import { Mongoose } from 'mongoose';
// import cors from 'cors';
import fs from 'fs';

const app = express();

app.get('/resume', (req,res) => {
  var stream = fs.createReadStream('./PDFs/ThomasDoyleResume.pdf');
  var filename = "ThomasDoyleResume.pdf"; 
  filename = encodeURIComponent(filename);
  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');
  res.setHeader('myAss', 'eddible');
  stream.pipe(res);
  console.log("Resume fetched from API")
});
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json({limit: "30mb", extended: true }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
