import React from 'react'
import Close from '../closeIcon';
import EditIcon from '../editIcon';

const History = ({data, onClose, onEdit}) => {

    return ( 
        <div className="history">
            <div className='historyHeader'>History</div>
            <div className="historyContent">
                {data.map(item => <div className={item.type === "addMoney" ? "increase" : "decrease"} key={item.id}> 
                <span className='comment'>{item.comment}</span> <span className='quantity'>{item.quantity}
                <span className='editIcon'><EditIcon onClick={() => onEdit(item)}/></span>
                <span className='closeIcon'><Close onClick={() => onClose(item)}/></span></span>    
            </div>)}
            </div>
        </div>
     );
}
 
export default History;
