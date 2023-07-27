import Header from "../component/Header"

import React from 'react'

export const Carnes = ({ title, content, image }) => {
  return (
  <div className="carne">
      {image && <img src={image} alt="Carne" />}
      <h2>{title}</h2>
      <p>{content}</p>
  </div>
  )
}

export default Carnes