import React from 'react';
import { Link } from 'react-router-dom';


const Buttons = () => {
    return ( 
        <div className="d-flex justify-content-around p-3">
            <Link to="/addMoney">
                <button className="btn btn-success">Add Money</button>
            </Link>

            <Link to="/withdraw">
                <button className="btn btn-danger">Withdraw</button>
            </Link>
        </div>
     );
}
 
export default Buttons;