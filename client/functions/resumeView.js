// Netlify Function
// Serves a PDF File 
import './PDFs/ThomasDoyleResume.pdf'
import { readFileSync } from 'fs'

const stringPath = './PDFs/ThomasDoyleResume.pdf'
const filename = 'ThomasDoyleResume.pdf'

export async function handler(event, context) {
  try {
    var encodedFile = encodeURIComponent(filename)
    var file = readFileSync(require.resolve(stringPath), {encoding: 'base64'});
    console.log("read....")
  }
  catch (e) {
    console.log("not Rad....")
    return {
      statusCode:420,
      body: `oh no`
    }
  }
  return {
    statusCode: 200,
    headers: {
      'Content-type' : 'application/pdf', 
      'Content-disposition': `inline; filename="${encodedFile}"`
    },
    body: `${file}`,
    isBase64Encoded : true,
    
}
}
