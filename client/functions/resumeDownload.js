// Netlify Function
// Serves a PDF File 
const fs = require ('fs')
const path = require ('path')

const pathToResume = path.join(__dirname,'..','functions','PDFs')
const filename = 'ThomasDoyleResume.pdf'

exports.handler = async (event, context) => {
  try {
    var encodedFile = encodeURIComponent(filename)
    var file = fs.readFileSync(path.join(pathToResume,filename), {encoding: 'base64'});
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
      'Content-disposition': `attachment; filename="${encodedFile}"`
    },
    body: `${file}`,
    isBase64Encoded : true,
    
}
}
