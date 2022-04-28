import React from 'react'

function User({ details }) {
  
  return (
    <div className='user'>
      <p>{details.firstName} {details.lastName}</p>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User