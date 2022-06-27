import React from 'react'

function Close({onClick}) {
  return (
    <i className="icons fa fa-times-circle" 
    style={{cursor: "pointer"}} 
    onClick={onClick} aria-hidden="true"></i>
  )
}

export default Close