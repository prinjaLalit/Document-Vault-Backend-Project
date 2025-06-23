// components/FileUploadCard.jsx
import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../DB_Connect';
import { addDoc, collection, deleteDoc, getFirestore, doc } from 'firebase/firestore';
import { app } from '../DB_Connect';

//User ki jo UID hum Globally Manage Kar rahe hain, pass it as a Prop "id" to this component
export default function FileUploadCard()
{
  const db = getFirestore(app);
  const [fileTitle, setFileTitle] = useState("");
  const [fileDescription, setFileDescription] = useState("");
  const [fileTags, setFileTags] = useState("");
  const [actualFile, setActualFile] = useState(null);
  // const [fileDownloadLink, setFileDownloadLink] = useState("");
  const [uploadState, setUploadState] = useState(false); //For checking if file successfully uploaded or not
  const [fileRefStateVarForDeletionLogic, setfileRefStateVarForDeletionLogic] = useState(null);
  const [individualFileDocID, setIdOfIndividualFileDoc] = useState("");
  const [allowfileEditVariable, setAllowFileEditVariable] = useState(false);
  const [new_file_name, set_new_file_name] = useState("");
  const [isEdited, setFileEditState] = useState(false);
  
  
  // const [individualUserDocID, setIndividualUserDocID] = useState("");
  
  //fileSubmitCloudHandling deals with simply uploading the file to cloud storage
  //storeFileLinkToUserFireStore deals with Associating the Cloud File to the Particular USer

  //As Deletion of File/Updation etc mei hamesha user doc ID is needed, therefore make it a state var
  //for this component
  //Deliberate ki its already GLOBAL, toh state needed or not?
  // const localStorageUserObject = JSON.parse(localStorage.getItem('docvault-userid'));
  // setIndividualUserDocID(localStorageUserObject.state.userID);

  const storeFileLinkToUserFirestore = async (fileCloudLink) => {
    //1) Create Files Subcollection and FirstDOc simultaneously in the User's Doc
    console.log("Entered the storeFileLinkToFireStore method");
    const localStorageUserObject = JSON.parse(localStorage.getItem('docvault-userid'));
    const user_individual_ID = localStorageUserObject.state.userID;
    console.log(user_individual_ID);
    const files_subCollection_path = "Users/" + user_individual_ID;
    const files_subCollection_name = "/UserFiles";

        addDoc(collection(db, files_subCollection_path + files_subCollection_name)
          ,{
          fileURL: fileCloudLink,
          fileName: fileTitle,
          details: fileDescription
        }).then((docRef)=> {console.log("Linking File to User in DB Successful, this is the ID of the Individual File's Doc created in User's Subcollection" + docRef.id)
            setIdOfIndividualFileDoc(docRef.id)
        });
  }

  const fileCloudSubmitHandling = async (event) => {
    event.preventDefault();
    if(!fileTitle || !actualFile) //Validating ki both File Title and the Actual File are Present
    {
        return alert("Please enter title and choose a file.");
    }

    //Cloud Storage mei Files Randomly Upload krenge, no User-specific association in Cloud, vo FIreStore mei denge
    const fileRef = ref(storage, `Uploads/${fileTitle}`);
    await uploadBytes(fileRef, actualFile);
    const url = await getDownloadURL(fileRef);
    // setFileDownloadLink(url);
//Ab yaha, FireStore se User ka Doc fetch kro using his UID(Present as Prop in this Component) and Link ko uski Files SubCollection ke Doc mei daaldo
   //Yeh Sb Form Fields will be Uploaded to the Doc in the FilesSubColection of the particular user 
        if(url)
        {
          setUploadState(true);
          setfileRefStateVarForDeletionLogic(fileRef);

        }
alert("Upload Successful"); //Only for Testing

//Logic for Storing the Files downloadable link in the User doc's file subcollection
await storeFileLinkToUserFirestore(url);

        // if(isEdited)
        // {
        //   deleteObject(fileRef).then(()=> console.log("Older File Reference Deleted"));
        // }
  };
/*Ab yeh jo mera Pura ka Pura Component hai, It is Dealing with a Single File Upload Card  & a Single File Upload
 yani, when we Click "Add New File", an entirely new working Instance of this Entire Code is Created
 and therefore is Particular Code deals Specifically with the individual Files deletion jispar user is working on

 Therefore, is code de layi u need NOT worry ki particular file ka hi Deletion ya Updation ho
 also Need NOT worry ki how will this COde ensure ki Particular File hi delete ho, 
*/ 
const deleteUserFile = ()=> {
  //Step1 in FileDeletion is to Delete the File from the CLOUD STORAGE
  deleteObject(fileRefStateVarForDeletionLogic).then(()=>{
  alert("File Deletion Successful")}).catch((error)=> {console.log("Error Deleting File" + error.message)});
  
  //Step2 is to delete the Link from User's individual firestore doc subcollection(Breaking the Linkage b/w File & User)
  const userDocIdObject = JSON.parse(localStorage.getItem('docvault-userid'));
  const individualUserDocID = userDocIdObject.state.userID;
 const deletionDocRef = doc(db, "Users", individualUserDocID, "UserFiles", individualFileDocID); //Too many args to Doc method indicate SubCollection

 deleteDoc(deletionDocRef).then(()=> console.log("FileDoc Deleted from User's Subcollection")).catch((error)=> console.log("Error is" + error.message));
}

const EditExistingFile = async ()=> {
  /*The Approach in Editing an already Existing File  is---> 
    1) Take Input the New Name of the File
    2) Re-Upload the File to the Same Path
    3) using UploadBytes Method */

    const new_edited_file_ref = ref(storage, `Uploads/${new_file_name}`);
    uploadBytes(new_edited_file_ref, actualFile).then(()=> {
      console.log("New Ref Created for the file with New Name");
    });
    const edited_file_url = await getDownloadURL(new_edited_file_ref);
      
    

    //Second Step is to Delete the Older Reference of the File
    const older_file_ref = ref(storage, `Uploads/${fileTitle}`);
    deleteObject(older_file_ref).then(()=> console.log("Older File Ref Deleted Sexfully"));
    
    /*Third Step is to access the UserDoc, then the Doc of Older File in the User's Files SubCollection 
    and Delete that Older Doc*/ 
    const localStorageUserObject = JSON.parse(localStorage.getItem('docvault-userid'));
    const actual_User_Doc_ID = localStorageUserObject.state.userID;
    const olderFileDoc_Deletion_Ref = doc(db, "Users", actual_User_Doc_ID, "UserFiles", individualFileDocID);
    deleteDoc(olderFileDoc_Deletion_Ref).then(()=> console.log("Older File'sDoc Deleted from User FireStore Doc"))

    /*Fourth Step is to Explicitly Create the Doc in User's FireStore for this Individual New File*/
    const file_subCollection_entire_path = "Users/" + actual_User_Doc_ID + "/UserFiles";
    addDoc(collection(db, file_subCollection_entire_path),{
      fileURL: edited_file_url,
      fileName: new_file_name,
    }).then(()=> console.log("EditedFile's Doc Created in User's FireStore UserFiles SubCollection")).catch((error)=> console.log("Aa Chakk Error: " + error.message));

    //Now the File Editing Works Successfully at the Backend
    //Next Task is to Modify the UI and the File Upload Card as Soon as the File Edit is Successful
    //Task 3 is to implement the UseEffect Re-Render Logic that picks data from FireStore and Renders on every re-render
  }
//Is Component mei JSX ki Conditional Rendering Lagaayi gayi hai...ki agar a file is not uploaded, then form render krenge on click of plus
//jab file successfully upload ho jaaye then kuch aur JSX Short si render krenge jismei keval summmary of File ho

//   return (
//     <div className="bg-white text-black rounded-xl p-4 mb-4 border border-gray-200 w-full max-w-sm">
//       {!uploadState ? (
//         <form className="space-y-3">
//           <input
//             type="text"
//             placeholder="File Title"
//             className="w-full border rounded p-2"
//             value={fileTitle}
//             onChange={(event) => setFileTitle(event.target.value)}
//           />
  
//           <input
//             type="text"
//             placeholder="Description"
//             className="w-full border rounded p-2"
//             value={fileDescription}
//             onChange={(event) => setFileDescription(event.target.value)}
//           />
  
//           <input
//             type="text"
//             placeholder="Tags (comma separated)"
//             className="w-full border rounded p-2"
//             value={fileTags}
//             onChange={(event) => setFileTags(event.target.value)}
//           />
  
//           <input
//             type="file"
//             className="w-full"
//             onChange={(event) => setActualFile(event.target.files[0])}
//           />
  
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={fileCloudSubmitHandling}
//           >
//             Upload File
//           </button>
//         </form>
//       ) : (
//         <>
//           <div className="flex justify-between items-center text-black">
//             <div>
//               <h4 className="font-bold text-lg">{fileTitle}</h4>
//               <p className="text-sm text-gray-600">{fileTags}</p>
//             </div>
//             <a
//               href="#"
//               target="_blank"
//               rel="noreferrer"
//               className="text-white bg-blue-500 border border-blue-500 rounded-lg p-4 text-sm"
//             >
//               Open File
//             </a>
//           </div>
//           <button
//             className="p-2 bg-red-500 border-2 border-red-500 rounded-lg mt-2"
//             onClick={deleteUserFile}
//           >
//             Delete File
//           </button>
//           <button
//             className={`${!allowfileEditVariable ? 'p-2 bg-blue-500 border-2 border-blue-500 rounded-lg mt-2 ml-2' : 'hidden'}`}
//             onClick={() => setAllowFileEditVariable(true)}
//           >
//             Edit File
//           </button>
//         <div className={`${allowfileEditVariable ? 'visible text-black' : 'hidden'}`}>
//           <label htmlFor="new_name"> Enter New Name of the File</label>
//           <input type="text" value={new_file_name} onChange={(event)=> set_new_file_name(event.target.value)}/>
//           <button className='bg-blue-500 border-2 border-blue-500 rounded-lg p-2 text-white' onClick={EditExistingFile}> Edit </button>
//         </div>
//         </>
//       )}
//     </div>
//   );
  
// }


return (
  <div className="bg-white/30 backdrop-blur-sm text-black border border-gray-300 shadow-md rounded-2xl p-6 mb-4 w-full max-w-sm transition-transform duration-300 hover:scale-[1.01]">
    {!uploadState ? (
      <form className="space-y-4">
        <input
          type="text"
          placeholder="File Title"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
          value={fileTitle}
          onChange={(event) => setFileTitle(event.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
          value={fileDescription}
          onChange={(event) => setFileDescription(event.target.value)}
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
          value={fileTags}
          onChange={(event) => setFileTags(event.target.value)}
        />

        <input
          type="file"
          className="w-full text-sm"
          onChange={(event) => setActualFile(event.target.files[0])}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all"
          onClick={fileCloudSubmitHandling}
        >
          Upload File
        </button>
      </form>
    ) : (
      <>
        <div className="flex justify-between items-center text-black bg-white/50 p-3 rounded-xl mb-3">
          <div>
            <h4 className="font-semibold text-lg">{fileTitle}</h4>
            <p className="text-sm text-gray-700 italic">{fileTags}</p>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs shadow"
          >
            Open File
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
            onClick={deleteUserFile}
          >
            Delete File
          </button>

          {!allowfileEditVariable && (
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
              onClick={() => setAllowFileEditVariable(true)}
            >
              Edit File
            </button>
          )}
        </div>

        {allowfileEditVariable && (
          <div className="mt-4 text-black space-y-2">
            <label htmlFor="new_name" className="block font-medium text-sm">
              Enter New Name of the File
            </label>
            <input
              type="text"
              value={new_file_name}
              onChange={(event) => set_new_file_name(event.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 bg-white/80 focus:ring-2 focus:ring-blue-400"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow mt-2"
              onClick={EditExistingFile}
            >
              Save Edit
            </button>
          </div>
        )}
      </>
    )}
  </div>
);
}
