import React from "react"
import NavbarItems from "./NavbarItems"

import { screenNav } from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={screenNav}>
      <NavbarItems />
    </nav>
  )
}

export default Navbar
