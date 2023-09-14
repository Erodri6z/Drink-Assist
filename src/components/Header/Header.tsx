import React from "react"
import './Header.css'
import GloomySpirits from "./../../assets/GloomySpirits.png"
interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <a href="/">
        <img src='GloomySpirits' alt="gloomySpirits" className="logo" srcSet={GloomySpirits} />
      </a>
      <h1 className="title">{ title }</h1>
    </header>
  )
}

export default Header