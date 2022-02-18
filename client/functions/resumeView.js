// Netlify Function
// Serves a PDF File 
const fs = require ('fs')
const stringPath = './PDFs/ThomasDoyleResume.pdf'
const filename = 'ThomasDoyleResume.pdf'

exports.handler = async (event, context) => {
  try {
    var encodedFile = encodeURIComponent(filename)
    var file = fs.readFileSync(require.resolve(stringPath), {encoding: 'base64'});
    console.log("read....")
  }
  catch (e) {
    console.log("not Rad....")
    return {
      statusCode:420,
      body: `oh no ${e}`
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
