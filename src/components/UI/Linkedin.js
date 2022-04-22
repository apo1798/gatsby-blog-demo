import React from "react"

import { LinkedinLogo } from "phosphor-react"
import { flexContainer } from "./General.module.css"

const Linkedin = ({ linkedinLink }) => {
  return (
    <div className={flexContainer}>
      <LinkedinLogo size={32} />
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
        Linkedin
      </a>
    </div>
  )
}

export default Linkedin
