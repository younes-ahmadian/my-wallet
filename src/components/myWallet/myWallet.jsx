import React from 'react';
import Buttons from './buttons';
import Header from './header';
import TotalBalance from './totalBalance';
import History from './history';




const MyWallet = ({total, data, onClose, onEdit}) => {
    
    return ( 
        <div className='myWallet'>
            <Header/>
            <TotalBalance cash={total}/>
            <Buttons />
            <History onClose={onClose} onEdit={onEdit} data={data}/>
        </div>

     );
}
 
export default MyWallet;