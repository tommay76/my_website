import React from 'react'
// import '../css/ResumeButton.css'
import axios from 'axios'
import  FileDownload  from 'js-file-download'

function ResumeButton () {
  
  const viewHandler = async () => {
    axios(`/resume`, {
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
    axios(`/resume`, {
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
    </div>
  )
}

export default ResumeButton