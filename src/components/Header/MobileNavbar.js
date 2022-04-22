import React, { useState } from "react"
import NavbarItems from "./NavbarItems"

import {
  mobileNav,
  mobileNavLinks,
  mobileNavIcon,
} from "./MobileNavbar.module.css"
import { List, X } from "phosphor-react"

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const muenOpenHandler = () => {
    setMenuOpen(state => !state)
  }

  const setMenuClosedHandler = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={mobileNav}>
        {menuOpen && (
          <div className={mobileNavLinks}>
            <NavbarItems closeMenu={setMenuClosedHandler} isMobile={true} />
          </div>
        )}
        {!menuOpen && (
          <List
            size={32}
            color="#ededed"
            className={mobileNavIcon}
            onClick={muenOpenHandler}
          />
        )}
        {menuOpen && (
          <X
            size={32}
            color="#ededed"
            onClick={muenOpenHandler}
            className={mobileNavIcon}
          />
        )}
      </nav>
    </>
  )
}

export default MobileNavbar
