import React from 'react'

const Info = ({name,surname,ward}) => {
  return (
    <div>
      <h1>MY INFO</h1>
      <p>Name is {name}</p>
      <p>SurName is {surname}</p>
      <p>ward is {ward}</p>
    </div>
  )
}

export default Info