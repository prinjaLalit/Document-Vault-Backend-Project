import React from 'react'
import { Outlet } from 'react-router-dom'
import FolderOrVaultCreation from '../Final_Real_Components/FolderOrVaultCreation'
import ParentFileUploaderComponent from '../Final_Real_Components/ParentFileUploaderComponent'
import MainHomeInitialPage from '../Final_Real_Components/MainHomeInitialPage'
import HowItWorksFlowchart from '../Final_Real_Components/TutorialComp'
// import LoginPageUI from '../Final_Real_Components/LoginPageUi'
import Authentication from '../Authentication_Context_Setup'
import VaultManager from '../Final_Real_Components/CreationManager'
import Navbar from '../Final_Real_Components/Navbar'
import { useEffect } from 'react'
import LogoutPopup from '../Final_Real_Components/LogoutPopup'
import AboutUs from '../Final_Real_Components/AboutUs'
import ContactUs from '../Final_Real_Components/Contact'
import Footer from '../Final_Real_Components/Footer'
import { restoreKeyFromSession } from '../Zustand/RestoreKeyOnRefreshLogic'
export default function Layout() {


  useEffect(() => {
    restoreKeyFromSession();
  }, []);

  return (
    <>
    
    <Navbar/>
  <Outlet/>
  <Footer/>
  
  </>
   
  )
}
