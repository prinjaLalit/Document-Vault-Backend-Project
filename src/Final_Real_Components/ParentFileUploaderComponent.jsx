// // CloudUploader.jsx
// import React, { useState } from 'react';
// import FileUploadCard from './FileUploadCard';
// // import { Plus } from 'lucide-react';

// export default function ParentFileUploaderComponent() 
// {
//   const [uploaderCardsArray, setUploaderCardsArray] = useState([0]);

//   const handleAddUploader = () => {
//     setUploaderCardsArray(prev => [...prev, prev.length]);
//   };
// /*Aapni Requirement sirf ehe nahi hai ki aapne UploadFileCard components UI te Add hunde jaanm we also
// require each of the card to have a Progressively Increasing Unique Identification ID/Key*/
// /*Thass why we need a Sample Array like "Uploader Card Array" to Rely Upon for ensuriing the divs are UNIQUE*/
//   return (
//   <>
//     <h1 className="text-2xl font-bold mb-6 text-center">My Document Vault</h1>
//     <div className="min-h-screen bg-gray-50 p-6 flex flex-row flex-wrap items-center justify-center">
      
//       {uploaderCardsArray.map((id) => (
//         <FileUploadCard key={id} id={id} />
//       ))}
//       <button onClick={handleAddUploader} className="mt-4 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 flex items-center gap-2">
//         Add New File
//       </button>
//     </div>
//     </>
//   );
// }








import React, { useState } from 'react';
import FileUploadCard from './FileUploadCard';

export default function ParentFileUploaderComponent() {
  const [uploaderCardsArray, setUploaderCardsArray] = useState([0]);

  const handleAddUploader = () => {
    setUploaderCardsArray(prev => [...prev, prev.length]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-[#1F2937] mb-10 tracking-wide">
        My <span className="text-blue-600">Document Vault</span>
      </h1>

      <div className="min-h-screen bg-gradient-to-b from-[#E0E7FF] to-[#F9FAFB] p-8 flex flex-wrap gap-6 justify-center items-start">

        {uploaderCardsArray.map((id) => (
          <FileUploadCard key={id} id={id} />
        ))}

        <button
          onClick={handleAddUploader}
          className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out font-semibold tracking-wide"
        >
          + Add New File
        </button>
      </div>
    </>
  );
}





