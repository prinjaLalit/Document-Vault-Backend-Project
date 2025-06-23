// import { useState } from "react";
// import { Menu, X, Lock } from "lucide-react"; // or any icons you prefer
// import { accessUsernameAndLoginState } from "../Authentication_Context_Setup";
// import { useNavigate, Link } from "react-router-dom";
// import { useFirebase } from "../Context/Firebase";
// import { zustandLoginStateStore } from "../Zustand/ZustadUid";

// export default function Navbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleToggle = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   //Now accessing loginState by Destructuring the accessloginstateandusername context
//   const {username_var, login_state, emailID, setUsername, setLoginState, setEmail} = accessUsernameAndLoginState();
//   const redirectTo = useNavigate();
//   const [showPopupState, setShowPopupState] = useState(false);
  
// const handleSideButtonClick= () => {
//     if(localStorage.getItem('login_state'))
//     {
//        redirectTo('/logout');

//     }
//     else
//     {
//       redirectTo('/login')
//         // setShowPopupState(true);
//     }
// }
 
// const firebase_hook = useFirebase();
// const handleLogoutLogic = () => {
//     firebase_hook.LogOut().then(()=> console.log("User Logged Out Successfully")).catch((error)=> console.log(error.message));
//     redirectTo('/home');
//     setLoginState(false);
//     setShowPopupState(false);
//     alert("Logged Out Successfully");
// }   
  
//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="flex justify-between items-center bg-white shadow-md p-4 fixed w-full z-40">
//         {/* Brand Logo */}
//         <div className="text-2xl font-bold">  <Link to='/home'><Lock className="h-12 w-12 text-blue-700" /> </Link></div>

//         {/* Center Nav Links (hidden on small screens) */}
//         <div className="hidden md:flex gap-8">
//           <Link to='/about' className="font-bold text-xl hover:text-blue-600">About</Link>
//           <Link to='/contact' className="font-bold text-xl hover:text-blue-600">Contact</Link>
//           <Link to='/explore' className="font-bold text-xl hover:text-blue-600">Explore</Link>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-4">
//           <div className={`${(!login_state || !emailID) ? "hidden" : "visible  border-2 border-blue-500 bg-blue-500 rounded-full p-4 md:flex items-center gap-2"}`}>
            
//             <span className="font-extrabold text-white text-xl">  {(emailID && login_state) ? emailID?.[0].toUpperCase() : ''}</span> {/*this logic here ensures ki login should be done and emailID should exist....kalli email se wont be visible*/}
//           </div>
//           <button className={`hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md`} onClick={handleSideButtonClick}>
//            {localStorage.getItem('login_state') ? "Logout" : "Login"}
//           </button>

//           {/* Hamburger Menu (only on small screens) */}
//           <button onClick={handleToggle} className="md:hidden">
//             {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//     {/*Designing the Logout Popup*/}

//       {/* Sidebar for small screens */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-50 transform ${
//           sidebarOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out p-6`}
//       >
//         <div className="flex flex-col gap-6">
//           <Link path='/about' onClick={handleToggle} className="hover:text-blue-600">About</Link>
//           <Link path='/contact' onClick={handleToggle} className="hover:text-blue-600">Contact</Link>
//           <Link path='/explore' onClick={handleToggle} className="hover:text-blue-600">Explore</Link>
//           <div className="flex items-center gap-2 mt-4">
//             <img src="/profile.png" alt="Profile" className="w-8 h-8 rounded-full" />
//             <span>Username</span>
//           </div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
//             Login
//           </button>
//         </div>
//       </div>



//     <div className={`${!showPopupState ? "hidden" : "visible"}`}>
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-96 p-6 space-y-4">
//         <h2 className="text-xl font-semibold text-center text-blue-500">
//           Are you sure you want to logout?
//         </h2>
//         <div className="flex justify-around">
//           <button
//             className="bg-blue-600 text-white rounded px-6 py-2 transition duration-200 hover:bg-blue-700"
//           onClick={handleLogoutLogic}
//           >
//             Yes
//           </button>
//           <button
//             className="bg-gray-300 text-gray-700 rounded px-6 py-2 transition duration-200 hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//  </div>
//     </>
//   );
// }






import { useState } from "react";
import { Menu, X, Lock } from "lucide-react";
import { accessUsernameAndLoginState } from "../Authentication_Context_Setup";
import { useNavigate, Link } from "react-router-dom";
import { useFirebase } from "../Context/Firebase";
import { zustandLoginStateStore } from "../Zustand/ZustadUid";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPopupState, setShowPopupState] = useState(false);

  const { username_var, login_state, emailID, setUsername, setLoginState, setEmail } =
    accessUsernameAndLoginState();
  const firebase_hook = useFirebase();
  const redirectTo = useNavigate();

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSideButtonClick = () => {
    if (localStorage.getItem("login_state")) {
      redirectTo("/logout");
    } else {
      redirectTo("/login");
    }
  };

  const handleLogoutLogic = () => {
    firebase_hook
      .LogOut()
      .then(() => console.log("User Logged Out Successfully"))
      .catch((error) => console.log(error.message));
    redirectTo("/home");
    setLoginState(false);
    setShowPopupState(false);
    alert("Logged Out Successfully");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-md p-4 fixed w-full z-40">
        {/* Brand Logo */}
        <div className="text-2xl font-bold">
          <Link to="/home">
            <Lock className="h-12 w-12 text-blue-700" />
          </Link>
        </div>

        {/* Center Nav Links (hidden on small screens) */}
        <div className="hidden md:flex gap-8">
          <Link to="/about" className="font-bold text-xl hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="font-bold text-xl hover:text-blue-600">
            Contact
          </Link>
          <Link to="/explore" className="font-bold text-xl hover:text-blue-600">
            Explore
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div
            className={`${
              !login_state || !emailID
                ? "hidden"
                : "visible border-2 border-blue-500 bg-blue-500 rounded-full p-4 md:flex items-center gap-4"
            }`}
          >
            <span className="font-extrabold text-white text-xl">
              {emailID && login_state ? emailID?.[0].toUpperCase() : ""}
            </span>
          </div>
          <button
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleSideButtonClick}
          >
            {localStorage.getItem("login_state") ? "Logout" : "Login"}
          </button>
        </div>
      </nav>

      {/* Hamburger Toggle Button - Always Visible on Mobile */}
      <button
        onClick={handleToggle}
        className="md:hidden fixed top-4 -right-3 z-50 bg-white rounded-full p-2 shadow-lg"
      >
        {sidebarOpen ? (
          <X size={24} className="transition-transform rotate-180" />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-40 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6`}
      >
        <div className="flex flex-col gap-6">
          <Link to="/about" onClick={handleToggle} className="hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" onClick={handleToggle} className="hover:text-blue-600">
            Contact
          </Link>
          <Link to="/explore" onClick={handleToggle} className="hover:text-blue-600">
            Explore
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <img src="/profile.png" alt="Profile" className="w-8 h-8 rounded-full" />
            <span>{username_var || "Username"}</span>
          </div>
          <button
            onClick={handleSideButtonClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
          >
            {localStorage.getItem("login_state") ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {/* Logout Popup */}
      <div className={`${!showPopupState ? "hidden" : "visible"}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 space-y-4">
            <h2 className="text-xl font-semibold text-center text-blue-500">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-around">
              <button
                className="bg-blue-600 text-white rounded px-6 py-2 transition duration-200 hover:bg-blue-700"
                onClick={handleLogoutLogic}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-700 rounded px-6 py-2 transition duration-200 hover:bg-gray-400"
                onClick={() => setShowPopupState(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

