import React from 'react'

const EditIcon = ({onClick}) => {
    return ( 
        <i className="fa fa-pencil-square-o"
        style={{cursor: "pointer"}} 
        onClick={onClick} aria-hidden="true"></i>
     );
}
 
export default EditIcon;