import React, { useState } from "react";

export default function LogoutPopup ({ onLogoutConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center text-blue-500">
          Are you sure you want to logout?
        </h2>
        <div className="flex justify-around">
          <button
            onClick={onLogoutConfirm}
            className="bg-blue-600 text-white rounded px-6 py-2 transition duration-200 hover:bg-blue-700"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 rounded px-6 py-2 transition duration-200 hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// const DocVaultApp = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const handleLogoutClick = () => {
//     setPopupVisible(true);
//   };

//   const handleLogoutConfirm = () => {
//     setPopupVisible(false);
//     // Handle logout logic here
//     console.log("User logged out");
//   };

//   const handleCancel = () => {
//     setPopupVisible(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <button
//         onClick={handleLogoutClick}
//         className="bg-blue-600 text-black px-6 py-3 rounded transition duration-200 hover:bg-blue-700"
//       >
//         Logout
//       </button>

//       {isPopupVisible && (
//         <LogoutPopup
//           onLogoutConfirm={handleLogoutConfirm}
//           onCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// };

// export default DocVaultApp;
