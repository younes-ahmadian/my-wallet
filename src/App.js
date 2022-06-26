import React, {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import _ from "lodash";
import MyWallet from './components/myWallet/myWallet';
import AddMoney from './components/addMoney';
import Withdraw from './components/withdraw';
import NotFound from './components/notFound';
import './App.css';

function App() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [history, setHistory] = useState([]);
  const [editting, setEditting] = useState({});
  let navigate = useNavigate();
  let values = {};
  let historyBox = [];
    
  const handleChange = (e) => {
      values[e.currentTarget.name] = e.currentTarget.value;
      if(editting.id){
        editting[e.currentTarget.name] = e.currentTarget.value;
      }
    }
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      
      //Editing Wallet
      if(editting.id) {
        const buffer = [...history];
        const index = buffer.indexOf(editting);
        buffer[index] = editting;
        if(editting.quantity) historyBox = [...buffer];
        else {
          buffer.splice(index,1);
          historyBox = [...buffer];
        } 
        setHistory(historyBox);
        setEditting({});
      }
      //Adding new item to Wallet
      else {
        values["id"] = _.uniqueId();
        historyBox = values.quantity ? [values, ...history] : [...history];
        setHistory(historyBox);
     }
  
    updateTotalBalance(totalBalance, historyBox);
    navigate("/");
  }
  
  const handleDelete = (item) => {
    historyBox = [...history];
    historyBox = historyBox.filter(m => m.id !== item.id);
    setHistory(historyBox);
    updateTotalBalance(totalBalance, historyBox);
  }
  
  const handleEdit = (item) => {
    setEditting(item);
    navigate(`${item.type}`);
  }
  
  //Updating Total Money
  function updateTotalBalance(totalBalance, historyBox) {
    let total = totalBalance;
    if(historyBox.length) { 
      const deals = historyBox.map(item => (item.type === "addMoney") ? Number(item.quantity) :  - Number(item.quantity));
      const sum = deals.reduce((result,number)=> result+number);
      total =  Math.round(sum*1000)/1000; 
    }
    else {
      total = 0;
    }   
    setTotalBalance(total);
  }

  return (
    <div className="App"> 
        <Routes>
            <Route path="/" element={<MyWallet data={history} 
                                               onClose={handleDelete}
                                               onEdit={handleEdit}
                                               total={totalBalance}/>}/>
            <Route path="/addMoney"  element={<AddMoney edit={editting} transaction={values} 
                                                        onSubmit={handleSubmit} onChange={handleChange}/>}/>
            <Route path="/withdraw"  element={<Withdraw edit={editting} transaction={values} 
                                                        onSubmit={handleSubmit} onChange={handleChange}/>}/>
            <Route path="*"  element={<NotFound to="/"/>}/>
        </Routes>
    </div>
  );
}

export default App;
