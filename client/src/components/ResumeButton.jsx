import React from 'react'
// import '../css/ResumeButton.css'
import axios from 'axios'
import  FileDownload  from 'js-file-download'

function ResumeButton () {
  
const APITester = async () => {
  axios.get('api/testHTML').then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log("error: Not got", err)
  })
}

  const viewHandler = async () => {
    axios(`/api/resume`, {
      method: "GET",
      responseType: "blob"
      //Force to receive data in a Blob Format
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  };
  const downloadHandler = async () => {
    axios(`/api/resume`, {
      method: "GET",
      responseType: "blob"
      //Force to receive data in a Blob Format
    })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        FileDownload(file, "ThomasDoyleResume.pdf");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className='ResumeButton'>
      
      <h2>My Resume</h2>

      <button onClick={viewHandler} className='ResumeViewButton' style={{ color: 'black' }}>
        <h2> Click Here </h2>
      </button>
      <button onClick={downloadHandler} className='ResumeDownloadButton' style={{ color: 'black' }}>
        <h2> Download </h2>
      </button>
      <button onClick={APITester} className='ResumeDownloadButton' style={{ color: 'black' }}>API Test</button>
    </div>
  )
}

export default ResumeButton