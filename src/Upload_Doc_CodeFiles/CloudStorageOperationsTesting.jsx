import React, { useState } from 'react'
import { storage } from '../DB_Connect'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export default function CloudStorageOperationsTesting() {
    const [fileTitle, setFileTitle] = useState("");
    const [fileDescription, setFileDescription] = useState("");
    const [actualFile, setActualFile] = useState(null);
    const [fileDownloadLink, setFileDownloadLink] = useState("");
    
    
    const handleFileUpload = async (event) =>{
      event.preventDefault();
  try{
      console.log("The Upload method is Starting to Execute");
      const storageRef = ref(storage, `Uploads/${fileTitle}`);
      await uploadBytes(storageRef, actualFile);
      const fileLink_temporary = await getDownloadURL(storageRef);
      setFileDownloadLink(fileLink_temporary);
      console.log("Task Completed");

}
  catch(error)
  {
    console.log("Ye galti h:" + error.message);
  }
}
  return (
    <>
      <div className="external_div">
        <form>
          <label htmlFor="FileTitle"> File Title: </label>
          <input type="text" value={fileTitle} onChange={(event)=> setFileTitle(event.target.value)}/>
          <br></br>
          <br></br>
          <label htmlFor="File Description"> File Description: </label>
          <input type="text" value={fileDescription} onChange={(event)=> setFileDescription(event.target.value)}/>
          <br></br>
          <br></br>
          <label htmlFor="upload_file"> Actual File: </label>
          <input type="file" onChange={(event)=> setActualFile(event.target.files[0])}/>
          <br></br>
          <br></br>
          
        </form>
        <button type='submit' onClick={handleFileUpload}> Upload File </button>
        <p> File download Link is: {fileDownloadLink}</p>
      </div>
    </>
  );

}
