import React from "react"
import './Header.css'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1 className="title">{ title }</h1>
    </header>
  )
}

export default Header