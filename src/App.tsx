import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
// import React from 'react'
import './App.css'
import Alphabet from './components/Alphabet/Alphabet'
// import { useState } from 'react'

function App() {

  // const [drinks, setDrinks] = useState<string[]>([])
 

  return (
    <>
      <Header title="Drink Assist"/>
      <div className="content-container">
        <SideBar />
        <div className="app-content">
          <Alphabet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
