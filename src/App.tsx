import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
// import React from 'react'
import './App.css'

function App() {


  return (
    <>
      <Header title="Drink Assist"/>
      <div className="content-container">
        <SideBar />
        <div className="app-content">
          <h3>hello this will be the thingy </h3>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
