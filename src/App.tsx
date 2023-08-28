import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
// import React from 'react'
// import './App.css'

function App() {


  return (
    <>
      <Header title="Drink Assist"/>
      {/* <div className="page-middle"> */}
        <SideBar />
      {/* </div> */}
      <Footer />
    </>
  )
}

export default App
