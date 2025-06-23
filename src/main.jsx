import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App.jsx'
import Authentication, { UsernameLoginStatusProvider } from './Authentication_Context_Setup.jsx'
import "./DB_Connect.js";
import { FireBaseProvider } from './Context/Firebase.jsx';
import Google_Authentication from './Google_Authentication.jsx';
import Upload_Docs_UI from './Upload_Doc_CodeFiles/Upload_Docs_UI.jsx';
import Firestore_CRUD_Practice from './Upload_Doc_CodeFiles/Firestore_CRUD_Practice.jsx';
import '../src/Upload_Doc_CodeFiles/index.css';
import Login_Page from './Login_Page.jsx';
import CloudStorageOperationsTesting from './Upload_Doc_CodeFiles/CloudStorageOperationsTesting.jsx';
import FileUploadCard from './Final_Real_Components/FileUploadCard.jsx';
import ParentFileUploaderComponent from './Final_Real_Components/ParentFileUploaderComponent.jsx';
import Layout from './Layout/Layout.jsx';
import HomePage from './Final_Real_Components/MainHomeInitialPage.jsx';
import FolderOrVaultCreation from './Final_Real_Components/FolderOrVaultCreation.jsx';
import ContactUs from './Final_Real_Components/Contact.jsx';
import AboutUs from './Final_Real_Components/AboutUs.jsx';
import VaultManager from './Final_Real_Components/CreationManager.jsx';
import TutorialComp from './Final_Real_Components/TutorialComp.jsx';
import LogoutPage from './Final_Real_Components/LogoutPage.jsx';
// createRoot(document.getElementById('root')).render(
// <StrictMode>
//   <FireBaseProvider>
//     {/*This means iss Authentication.jsx vaale Method ko dono utility funcs ka Global access dedo */}
//   {/* Authentication.jsx acts as the value for props.children */}
//   <ParentFileUploaderComponent/>
//   </FireBaseProvider>
    
//     </StrictMode>,
// )


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login_Page />} />
//         <Route path="/uploadFile" element={<ParentFileUploaderComponent />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
     <Route path='login' element={<Authentication/>}></Route>
    <Route index element={<HomePage/>}></Route>
    <Route path='logout' element={<LogoutPage/>}></Route>
    <Route path='home' element={<HomePage />}></Route>
    {/* <Route path='signup' element={<Authentication/>}></Route> */}
    <Route path='fileUploader' element={<ParentFileUploaderComponent />}></Route>
    <Route path='vaultCreation' element={<VaultManager/>}></Route>
    <Route path='contact' element={<ContactUs/>}></Route>
    <Route path='about' element={<AboutUs/>}></Route>
    
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FireBaseProvider>
    <UsernameLoginStatusProvider>
      <RouterProvider router={router}></RouterProvider>
    </UsernameLoginStatusProvider>
  </FireBaseProvider>
  </StrictMode>,
)