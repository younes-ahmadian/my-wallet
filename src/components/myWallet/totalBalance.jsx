import React from 'react'

const TotalBalance = ({cash}) => {
    return ( 
        <div className="totalBalance">
            Total Balance: <span className='cash'>{cash}</span>
        </div>
     );
}
 
export default TotalBalance;