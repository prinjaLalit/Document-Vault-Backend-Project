import React, { useState } from 'react'

export default function Upload_Docs_UI() {
    const [doc_title, setDocTitle] = useState("");
    const [doc_description, setDocDescription] = useState("");
    //The Real Document File would also once be a State Variable owing to the Standard Procedure of making forms
    const [file, setFile] = useState(null);
    
    const handleUpload = () => {
        //Make the Logic for Sequence of Events involving FireStore DB and FirebaseCloud Storage that follow the Successful file submission
    }
  return (
   <>
    <form>
        <label htmlFor="title"> Document Title: </label>
        <input type="text" value={doc_title} onChange={(event)=> setDocTitle(event.target.value)} />
            <br></br>
            <br></br>
        <label htmlFor="description"> Document Description: </label>
        <textarea name="description" id="description" value={doc_description} onChange={(event)=> setDocDescription(event.target.value)}></textarea>
            <br></br>
            <br></br>
        <label htmlFor="file"> Upload File: </label>
        <input type="file" value={file} onChange={(event)=> setFile(event.target.value)}/>
            <br></br>
            <br></br>
        <button onClick={handleUpload()}> Upload Document</button>
    </form>
   </>
  )
}
