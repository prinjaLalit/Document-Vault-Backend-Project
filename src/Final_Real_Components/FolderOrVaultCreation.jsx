// import React, { useState } from 'react'
// import { BriefcaseIcon } from '@heroicons/react/24/solid';
// // import Vault_contents from './Vault_contents';
// import FileUploadCustomVault from './FileUploadCustomVault';

// export default function FolderOrVaultCreation() {
//     const [custom_vault_name, setCustomVaultName] = useState(""); //This is being passed as Prop to file upload component taaki usi name ka subcollection bane
//     const [vault_purpose, setVaultPurpose] = useState("");
//     const [vaultCreationStatus, setVaultCreationStatus] = useState(false);
//     const [renderFileUploadForm, setFileUploadFormRender] = useState(false)
//     const [fileUploaderToVaultArray, setFileUploaderToVaultArray] = useState([0]);
    
//     const handleVaultCreation = (event) =>{
//         event.preventDefault();

//         setVaultCreationStatus(true);
//         setFileUploadFormRender(true);
//     }

    
//     const addNewFileUploaderComponent = () => {
//         setFileUploaderToVaultArray((prev)=> [...prev, prev.length]);
//     }



//   return (
//     <>
//         <div className='border-2 border-black rounded-lg flex flex-col items-center max-w-[90vw] max-h-[20vh]'> 
//             <BriefcaseIcon className="max-h-[60%] max-w-[90%] text-black" />
//         <form>
//                 <input type="text" placeholder='Vault Name:' value={custom_vault_name} onChange={(event)=> setCustomVaultName(event.target.value)} className='border border-black rounded-lg max-w-[90%]'/>
//                     <br></br>
//                 <input type="text" placeholder='Vault Purpose: ' value={vault_purpose} onChange={(event)=> setVaultPurpose(event.target.value)} className='border border-black rounded-lg max-w-[90%]'/>
//                 <button type='submit' onClick={handleVaultCreation} className='bg-black border border-black rounded-lg p-2 text-white'> Create Vault </button>
//             </form>
            
            


//         </div>
//     <div className={`${vaultCreationStatus ? 'visible' : 'hidden'}`}>
//       <button className='bg-black text-white p-2 border border-black rounded-lg' onClick={addNewFileUploaderComponent}> Add File to Vault </button>
//     </div>
//     {/*Yaha Pe Iterative Logic and Option of Multiple Instances of the same FileUploadCustomVault
//     Component ko Lagao */}

//     <div className={`${renderFileUploadForm ? 'visible' : 'hidden'}`}>
//         {fileUploaderToVaultArray.map((id)=> (
//         <FileUploadCustomVault vaultName={custom_vault_name} key={id}/>
//         ))}
//     </div>
//     </>
//   )
// }


// import React, { useState } from 'react';
// import { BriefcaseIcon } from '@heroicons/react/24/solid';
// import FileUploadCustomVault from './FileUploadCustomVault';

// export default function FolderOrVaultCreation() {
//   const [custom_vault_name, setCustomVaultName] = useState("");
//   const [vault_purpose, setVaultPurpose] = useState("");
//   const [vaultCreationStatus, setVaultCreationStatus] = useState(false);
//   const [renderFileUploadForm, setFileUploadFormRender] = useState(false);
//   const [fileUploaderToVaultArray, setFileUploaderToVaultArray] = useState([0]);

//   const handleVaultCreation = (event) => {
//     event.preventDefault();
//     setVaultCreationStatus(true);
//     setFileUploadFormRender(true);
//   };

//   const addNewFileUploaderComponent = () => {
//     setFileUploaderToVaultArray((prev) => [...prev, prev.length]);
//   };

//   return (
//     <div className="flex flex-col items-center p-8 space-y-8 bg-gradient-to-b from-white to-blue-100 min-h-screen">
//       <div className='border-2 border-blue-400 rounded-2xl flex flex-col items-center justify-center w-full max-w-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white backdrop-blur-md'>
//         <BriefcaseIcon className="h-20 w-20 text-blue-600 mb-6" />
//         <form onSubmit={handleVaultCreation} className='flex flex-col items-center space-y-6 w-full'>
//           <input
//             type="text"
//             placeholder='Vault Name'
//             value={custom_vault_name}
//             onChange={(event) => setCustomVaultName(event.target.value)}
//             className='border border-blue-300 rounded-lg w-3/4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
//             required
//           />
//           <input
//             type="text"
//             placeholder='Vault Purpose'
//             value={vault_purpose}
//             onChange={(event) => setVaultPurpose(event.target.value)}
//             className='border border-blue-300 rounded-lg w-3/4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
//           />
//           <button
//             type='submit'
//             className='bg-blue-600 text-white rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors duration-300 shadow-md'
//           >
//             Create Vault
//           </button>
//         </form>
//       </div>

//       {vaultCreationStatus && (
//         <button
//           className='bg-blue-600 text-white rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors duration-300 shadow-md'
//           onClick={addNewFileUploaderComponent}
//         >
//           + Add File to Vault
//         </button>
//       )}

//       <div className="flex flex-wrap justify-center gap-8 w-full">
//         {renderFileUploadForm && fileUploaderToVaultArray.map((id) => (
//           <FileUploadCustomVault vaultName={custom_vault_name} key={id} />
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import FileUploadCustomVault from './FileUploadCustomVault';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function FolderOrVaultCreation() {
  const [custom_vault_name, setCustomVaultName] = useState("");
  const [vault_purpose, setVaultPurpose] = useState("");
  const [vaultCreationStatus, setVaultCreationStatus] = useState(false);
  const [renderFileUploadForm, setFileUploadFormRender] = useState(false);
  const [fileUploaderToVaultArray, setFileUploaderToVaultArray] = useState([0]);

  const handleVaultCreation = (event) => {
    event.preventDefault();
    setVaultCreationStatus(true);
    setFileUploadFormRender(true);
  };

  const addNewFileUploaderComponent = () => {
    setFileUploaderToVaultArray((prev) => [...prev, prev.length]);
  };

  const scrollToFileUploading = () => {
    window.scrollBy({
        top: 600,
        left: 0,
        behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-8 bg-gradient-to-b from-white to-blue-100 min-h-screen">

      {/* Banner Section */}
      {/* Banner Section */}
<div className="w-full bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800 text-center py-20 mb-10 rounded-2xl shadow-2xl relative overflow-hidden">
  
  {/* Lock/Vault Icon */}
  <div className="flex justify-center mt-6">
    <LockClosedIcon className="h-16 w-16 text-blue-600" />
  </div>

  {/* Headline */}
  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
    Secure Your Important Documents
  </h1>

  {/* Subheading */}
  <p className="mt-4 text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
    Create your personalized vault and store your files with trusted encryption and effortless access.
  </p>

  {/* CTA Button */}
  <button 
    onClick={scrollToFileUploading}
    className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:cursor-pointer shadow-md">
    Get Started
  </button>

  {/* Decorative subtle background effect */}
  <div className="absolute inset-0 opacity-5 bg-[url('https://www.svgrepo.com/show/16135/lock.svg')] bg-center bg-no-repeat bg-contain"></div>
</div>


      {/* Vault Creation Section */}
      <div className='border-2 border-blue-400 mt-12 rounded-2xl flex flex-col items-center justify-center w-full max-w-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white backdrop-blur-md'>
        <BriefcaseIcon className="h-20 w-20 text-blue-600 mb-6" />
        <form onSubmit={handleVaultCreation} className='flex flex-col items-center space-y-6 w-full'>
          <input
            type="text"
            placeholder='Vault Name'
            value={custom_vault_name}
            onChange={(event) => setCustomVaultName(event.target.value)}
            className='border border-blue-300 rounded-lg w-3/4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
          <input
            type="text"
            placeholder='Vault Purpose'
            value={vault_purpose}
            onChange={(event) => setVaultPurpose(event.target.value)}
            className='border border-blue-300 rounded-lg w-3/4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <button
            type='submit'
            className='bg-blue-600 text-white rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors duration-300 shadow-md'
          >
            Create Vault
          </button>
        </form>
      </div>

      {/* Add File Button */}
      {vaultCreationStatus && (
        <button
          className='bg-blue-600 text-white rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors duration-300 shadow-md'
          onClick={addNewFileUploaderComponent}
        >
          + Add File to Vault
        </button>
      )}

      {/* Render File Upload Components */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {renderFileUploadForm && fileUploaderToVaultArray.map((id) => (
          <FileUploadCustomVault vaultName={custom_vault_name} key={id} />
        ))}
      </div>
    </div>
  );
}
