// import React, { useState } from 'react'
// import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
// import { storage } from '../DB_Connect';
// import { addDoc, collection, getFirestore, doc } from 'firebase/firestore';
// import { app } from '../DB_Connect';

// export default function FileUploadCustomVault(props) {
//     const [file_name, setFileName] = useState("");
//     const [file_description, setFileDescription] = useState("");
//     const [actual_file, setActualFile] = useState(null);
//     const [fileURL, setFileURL] = useState("");
    
//      const db = getFirestore(app);
//     //This Component will take the CustomVault i.e. SubCollection's Name as the Prop
       
//     const addFileToCustomUserVaultCloud = async (event) => {
//         //Step 1 is to Upload the File to Cloud without User Specificity
        
//         event.preventDefault();

//         if (!actual_file || !file_name) {
//             alert("Please provide both a file and a file name before submitting.");
//           }
//         //Always give a Validation Null Check beforeHand ki Cloud Functions ke Execution se Pehle
//         //file ka name and actualFile both should Exist

//     //Another Good Practice is to always Enclose your Major Third Dependency Logic in a Try-Catch Block
//     try{
//         const fileRefCloud = ref(storage,`Uploads/${file_name}`);
//         await uploadBytes(fileRefCloud, actual_file);
//         const fileLink = await getDownloadURL(fileRefCloud);
        
//         if(fileLink)
//         {
//             console.log("File Download Link Retrieved: " + fileLink);
//             console.log("CustomVault/SubCollection name retrieved from PArent comp is= " + props.vaultName)
//         // setFileURL(fileLink);
//         await createVaultSubCollectionInUserDoc(fileLink);
//         }
//     }catch (error) {
//         console.log("Error in uploading file to Cloud--" + error.message);
//     }

    

//     }

//     const createVaultSubCollectionInUserDoc = async (fileCloudWebLink) => {
//         //Step 1: use addDoc to create a Doc having file title, file link and in particular subCollection
//         //Vault/SubCollection name is a Prop in this component, therefore accessible at all places
//         const localStorageUserMegaObject = JSON.parse(localStorage.getItem('docvault-userid'));
//         const userDocId = localStorageUserMegaObject.state.userID;

//         const VaultSubCollectionPath = "Users/" + userDocId + "/" + props.vaultName;
//         addDoc(collection(db, VaultSubCollectionPath), {
//             fileName: file_name,
//             fileWebLink: fileCloudWebLink
//         }).then(()=> console.log("Vault SubCollection Created in FireStore UserDoc and File Uploaded")).catch((error)=> console.log(error.message));
    
//     }
//   return (
//     <>
//         <div className='border-2 border-black rounded-lg max-w-[25vw]'>
//             <form>
//                 <input type="text" value={file_name} onChange={(event)=> setFileName(event.target.value)} placeholder='File Name:'/>
//                 <input type="text" value={file_description} onChange={(event)=> setFileDescription(event.target.value)} placeholder='File Description: '/>
//                 <input type="file" onChange={(event)=> setActualFile(event.target.files[0])}/>

//                 <button type='submit' className='border border-black p-2 text-white bg-black' onClick={addFileToCustomUserVaultCloud}> Submit File </button>
//             </form>
//         </div>
//     </>
//   )
// }






// import React, { useState } from 'react'
// import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
// import { storage } from '../DB_Connect';
// import { addDoc, collection, getFirestore, doc } from 'firebase/firestore';
// import { app } from '../DB_Connect';

// export default function FileUploadCustomVault(props) {
//     const [file_name, setFileName] = useState("");
//     const [file_description, setFileDescription] = useState("");
//     const [actual_file, setActualFile] = useState(null);
    
//     const db = getFirestore(app);

//     const addFileToCustomUserVaultCloud = async (event) => {
//         event.preventDefault();

//         if (!actual_file || !file_name) {
//             alert("Please provide both a file and a file name before submitting.");
//             return;
//         }

//         try {
//             const fileRefCloud = ref(storage,`Uploads/${file_name}`);
//             await uploadBytes(fileRefCloud, actual_file);
//             const fileLink = await getDownloadURL(fileRefCloud);
            
//             if(fileLink) {
//                 await createVaultSubCollectionInUserDoc(fileLink);
//             }
//         } catch (error) {
//             console.log("Error in uploading file to Cloud--" + error.message);
//         }
//     }

//     const createVaultSubCollectionInUserDoc = async (fileCloudWebLink) => {
//         const localStorageUserMegaObject = JSON.parse(localStorage.getItem('docvault-userid'));
//         const userDocId = localStorageUserMegaObject.state.userID;

//         const VaultSubCollectionPath = "Users/" + userDocId + "/" + props.vaultName;
//         addDoc(collection(db, VaultSubCollectionPath), {
//             fileName: file_name,
//             fileWebLink: fileCloudWebLink,
//             fileDescription: file_description,
//         }).then(()=> console.log("Vault SubCollection Created in FireStore UserDoc and File Uploaded"))
//           .catch((error)=> console.log(error.message));
//     }

//     return (
//     <div className='flex justify-center items-center min-h-screen max-w-xl bg-gradient-to-r from-white to-blue-100'>
//         <div className='bg-white p-4 rounded-2xl shadow-lg border border-blue-300 w-[90%] max-w-lg'>
//             <h2 className='text-2xl font-bold text-center text-blue-700 mb-6'>Upload Your Secure File</h2>
//             <form className='flex flex-col gap-4' onSubmit={addFileToCustomUserVaultCloud}>
//                 <input 
//                     type="text" 
//                     value={file_name} 
//                     onChange={(event)=> setFileName(event.target.value)} 
//                     placeholder='File Name' 
//                     className='border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400'
//                 />
//                 <input 
//                     type="text" 
//                     value={file_description} 
//                     onChange={(event)=> setFileDescription(event.target.value)} 
//                     placeholder='File Description (Optional)' 
//                     className='border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400'
//                 />
//                 <input 
//                     type="file" 
//                     onChange={(event)=> setActualFile(event.target.files[0])} 
//                     className='border border-blue-300 rounded-lg px-4 py-2 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200'
//                 />
//                 <button 
//                     type='submit' 
//                     className='mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition duration-300'
//                 >
//                     Upload File
//                 </button>
//             </form>
//         </div>
//     </div>
//     )
// }





import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { storage } from '../DB_Connect';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../DB_Connect';
import { encryptFile, IVGeneration } from './EncryptionManagerFunctions';
import { zustandKeyObjectStore } from '../Zustand/ZustadUid';
import { deleteDoc } from 'firebase/firestore';
import { deleteObject } from 'firebase/storage';
import { doc } from 'firebase/firestore';

export default function FileUploadCustomVault(props) {
    const [file_name, setFileName] = useState("");
    const [file_description, setFileDescription] = useState("");
    const [actual_file, setActualFile] = useState(null);
    const [fileUploadedState, setFileUploadedState] = useState(false);
    const [encrypted_file_cloud_link, setEncryptedFileCloudLink] = useState("");
    const [uploadedFilesArray, setUploadedFilesArray] = useState([]);
    const [fileRefVarForDeletionLogic, setFileRefVarForDeletion] = useState(null);
    const [individualFileDocID, setIndividualFileDocID] = useState("");
    const [fileDeletionStatus, setFileDeletionStatus] = useState(false);
    
    const db = getFirestore(app);
    //Now before actually creating Cloud Storage Ref, we are supposed to Encrypt the File
    //First Step in the Actual File Encryption will be to generate a random IV for every file before sending it for Encryption
    
    const CryptoKey = zustandKeyObjectStore(state=> state.cryptoKey);
    const addFileToCustomUserVaultCloud = async (event) => {
        event.preventDefault();
        console.log("Entered the addFileToCustomUserVaultMethod");

        if(!actual_file || !file_name) 
        {
            alert("Please provide both a file and a file name before submitting.");
            return;
        }
        

        // try {
            //Step1 is to get the Initialisation Vector...no need for it to be in a state var as UI pe toh render krna nahi hai ise
            // const iv_for_individual_file = IVGeneration();
            // console.log(iv_for_individual_file);
            console.log("Entered the Try Block");
            
                // let CryptoKey = zustandKeyObjectStore.getState().cryptoKey;
                if(!CryptoKey)
                {
                    console.log("CryptoKey Not Available Error");
                }

            console.log("Key Obtained from Zustand, for using in File Encryption here" + CryptoKey);
            //fetching the cryptoKey from Zustand store where its stored with "cryptoKey" Keynamee
            //now this key will be passed along with actual file to the encryption function

            // console.log("Current Zustand Key:" + " " + CryptoKey);
            //This is to check whether cryptoKey is even present in ZustandStore or Not

            const encryptedFileObject = await encryptFile(actual_file, CryptoKey);
            
            const iv_obtained = encryptedFileObject.iv;
            const encrypted_file_blob = encryptedFileObject.encryptedBlob;


            //this func will return an Object that contains encrypted file content in form of a BLOB
            //and will return the iv used in file encryption

            //Before uploading the encrypted file to cloud, we'll also create a Metadata Object to attach to it

            const individual_file_metaData = {
                contentType: 'application/octet-stream',
                customMetadata: 
                {
                    iv: JSON.stringify(iv_obtained) // Storing IV along with file
                }
            };

            const fileRefCloud = ref(storage, `Uploads/${file_name}`);
            await uploadBytes(fileRefCloud, encrypted_file_blob, individual_file_metaData);
            console.log("Encrypted File Uploaded with IV and Metadata");
            const fileLink = await getDownloadURL(fileRefCloud);

            if (fileLink) 
            {
                await createVaultSubCollectionInUserDoc(fileLink);

                setUploadedFilesArray(prev => [...prev, {
                  name: file_name,
                  link: fileLink
                }]);
                
                setFileRefVarForDeletion(fileRefCloud);
                setFileName("");
                setFileDescription("");
                setActualFile(null);
            }
        } 
            // catch (error)
            // {
            //     console.log("Error in uploading file to Cloud--" + error.message);
            // }
    

    const createVaultSubCollectionInUserDoc = async (fileCloudWebLink) => {
        const userDocId = localStorage.getItem('docvault-userid');
        // const userDocId = localStorageUserMegaObject.state.userID;

        const VaultSubCollectionPath = "Users/" + userDocId + "/" + props.vaultName;
        //The name of the Vault was decided in the Parent Component i.e. folderOrVault Creation using a form state variable
        //and the value is passed as a Prop to the FileUploadCustomVault taaki addDoc mei SbCollection path mei the Vault's name is used
        //and thereby ensured ki sameName ka Subcollection bane in firestore userdoc
        addDoc(collection(db, VaultSubCollectionPath), {
            fileName: file_name,
            fileWebLink: fileCloudWebLink,
            fileDescription: file_description,
        }).then((fileDocID) => {console.log("Vault SubCollection Created in FireStore UserDoc and File Uploaded")
            setFileUploadedState(true);
            setEncryptedFileCloudLink(fileCloudWebLink);
            setIndividualFileDocID(fileDocID);
        })
          .catch((error) => console.log(error.message));
    }

    const deleteUserFileLogic = ()=> {
        deleteObject(fileRefVarForDeletionLogic).then(()=>{
        alert("File Deletion from CLOUD Successful")}).catch((error)=> {console.log("Error Deleting File from CLOUD" + error.message)});
        
         const userDocIdObject = localStorage.getItem('docvault-userid');
         if(!userDocIdObject)
         {
          console.log("UID not found in local storage");
         }
         console.log(userDocIdObject);
          // const individualUserDocID = userDocIdObject.state.userID;
          console.log(props.vaultName);
          console.log(individualFileDocID);

         const deletionDocRef = doc(db, "Users", userDocIdObject, props.vaultName, individualFileDocID.id); //Deliberate on WHY .id was used
         //jab addDoc ke saath .then((docId)=> ) krte hain toh this "docId" isnt just a string with the document's ID, its the Entire Non-String Object jismei se id has to be fetched using .id
         //agar doc method ko Non-String Value pass kroge, toh it shows the error: "n.indexOf" is NOT a Function
         deleteDoc(deletionDocRef).then(()=> {console.log("FileDoc Deleted from User's fireStore VaultSubcollection")
          setFileDeletionStatus(true);
         }).catch((error)=> console.log("Error is" + error.message));
    }

    return (


//     <div className='flex flex-col items-center min-h-lvh bg-gradient-to-r from-white to-blue-100 py-10'>
//   <div className='w-[80vw] max-w-5xl space-y-8'>
//     {/* Section: Uploaded Files */}
//     {uploadedFilesArray.map((file, index) => (
//       <div
//         key={index}
//         className={`${fileDeletionStatus ? "hidden" : "bg-white p-8 rounded-2xl shadow-lg border border-blue-300 flex justify-center"}`}
//       >
//         <div className='w-full max-w-md text-center'>
//           <h2 className='text-2xl font-bold text-blue-700 mb-4'>
//             File Uploaded Successfully!
//           </h2>
//           <p className='mb-2'>
//             <span className='font-semibold'>Name:</span> {file.name}
//           </p>
//           <p className='mb-6'>
//             <span className='font-semibold'>Download:</span>{" "}
//             <a
//               href={file.link}
//               target='_blank'
//               rel='noopener noreferrer'
//               className='text-black underline'
//             >
//               Cloud Link
//             </a>
//           </p>
//           <button className='bg-red-500 border-red-500 border-2 rounded-lg text-white p-2' onClick={deleteUserFileLogic}> Delete File </button>
//         </div>
//       </div>
//     ))}

//     {/* Section: Upload Form */}
//     <div className='bg-white p-8 rounded-2xl shadow-lg border border-blue-300 flex justify-center'>
//       <div className='w-full max-w-md'>
//         <h2 className='text-2xl font-bold text-center text-blue-700 mb-6'>
//           Upload Your Secure File
//         </h2>
//         <form className='flex flex-col gap-4' onSubmit={addFileToCustomUserVaultCloud}>
//           <input
//             type='text'
//             value={file_name}
//             onChange={(e) => setFileName(e.target.value)}
//             placeholder='File Name'
//             className='border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400'
//           />
//           <input
//             type='text'
//             value={file_description}
//             onChange={(e) => setFileDescription(e.target.value)}
//             placeholder='File Description (Optional)'
//             className='border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400'
//           />
//           <input
//             type='file'
//             onChange={(e) => setActualFile(e.target.files[0])}
//             className='border border-blue-300 rounded-lg px-4 py-2 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200'
//           />
//           <button
//             type='submit'
//             className='mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition duration-300'
//           >
//             Upload File
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>

//     );
// }

<div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-white to-blue-100 py-10 px-4 sm:px-6">
  <div className="w-full max-w-6xl space-y-8">
    {/* Uploaded Files */}
    {uploadedFilesArray.map((file, index) => (
      <div
        key={index}
        className={`${
          fileDeletionStatus ? "hidden" : "bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-300 flex justify-center"
        }`}
      >
        <div className="w-full max-w-sm text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
            File Uploaded Successfully!
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Name:</span> {file.name}
          </p>
          <p className="mb-6 break-all">
            <span className="font-semibold">Download:</span>{" "}
            <a
              href={file.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline"
            >
              Cloud Link
            </a>
          </p>
          <button
            className="bg-red-500 border-red-500 border-2 rounded-lg text-white px-4 py-2"
            onClick={deleteUserFileLogic}
          >
            Delete File
          </button>
        </div>
      </div>
    ))}

    {/* Upload Form */}
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-300 flex justify-center">
      <div className="w-full max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-6">
          Upload Your Secure File to {props.vaultName}
        </h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={addFileToCustomUserVaultCloud}
        >
          <input
            type="text"
            value={file_name}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="File Name"
            className="border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <input
            type="text"
            value={file_description}
            onChange={(e) => setFileDescription(e.target.value)}
            placeholder="File Description (Optional)"
            className="border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <input
            type="file"
            onChange={(e) => setActualFile(e.target.files[0])}
            className="border border-blue-300 rounded-lg px-4 py-2 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition duration-300"
          >
            Upload File
          </button>
        </form>
      </div>
    </div>
  </div>
</div>



    )}