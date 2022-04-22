import React from "react"

import { EnvelopeSimple } from "phosphor-react"
import { flexContainer } from "./General.module.css"

const Email = ({ address }) => {
  return (
    <div className={flexContainer}>
      <EnvelopeSimple size={32} />
      <a href={`mailto:${address}`}>{address}</a>
    </div>
  )
}

export default Email
