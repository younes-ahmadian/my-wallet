import React from 'react'

const AddMoney = ({transaction, onSubmit, onChange, edit}) => {

    transaction.type = "addMoney";
    return ( 
        <div className="addMoney" style={{color:"#3cff00"}}>
            <form onSubmit={onSubmit}>
                <div className="form-group p-3">
                    <label htmlFor="amount" className='m-2'>Amount of Money to <b>Add</b>: </label>
                    <input  type="number" 
                            step={0.001}
                            className="form-control" 
                            id="amount" 
                            onChange={onChange}  
                            name="quantity"  
                            placeholder="Enter quantity..."
                            defaultValue={edit.quantity}/>
                </div>

                <div className="form-group p-3">
                    <label htmlFor="description" className='m-2'>Description(Optional)...</label>
                    <input  type="text" 
                            className="form-control" 
                            id="description" 
                            onChange={onChange} 
                            name="comment"  
                            placeholder="Enter comment..."
                            defaultValue={edit.comment}/>
                </div>
            
                <button type="submit" className="btn btn-success m-3" >Add Money</button>
            </form>
        </div>
     );
}
 
export default AddMoney;