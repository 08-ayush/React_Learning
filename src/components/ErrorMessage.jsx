import React from 'react'

const ErrorMessage = ({items}) => {

  return (
    <div>
          {items.length === 0 ? <p>No food items available</p> : null}
    </div>
  )
}

export default ErrorMessage
