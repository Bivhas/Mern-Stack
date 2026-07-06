import React from 'react'

const Mother = ({name,surname,age}) => {
  return (
    <div>
      <h1>Mother Details</h1>
      <p>Name:{name}</p>
      <p>SurName:{surname}</p>
      <p>Age:{age}</p>

    </div>
  )
}

export default Mother