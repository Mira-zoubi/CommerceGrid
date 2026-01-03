import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppFooter from './Components/Footer/AppFooter';
import AppHeader from './Components/Header/AppHeader';
import PageContent from './Components/PageContent/PageContent';
import SideMenu from './Components/SideMenu/SideMenu';


function App() {
  
return (
  <>
  <div className='App'>
  <AppHeader/> 
  
  <div className='AppMain'>
      <SideMenu/>
      <PageContent/>
  </div>

  <AppFooter/>

  </div>
  </>
)

}

export default App
