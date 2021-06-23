import React from 'react';

import InputCalculate from './component/InputCalculate';
import ButtonCalculate from './component/ButtonsCalculate';

import './App.css';

export default function App() {
  const [calculate, setCalculate] = React.useState({
    data: ''
  });

  let dataHandler = (e) => {
    e.preventDefault();
    let interalVal = e.target.innerHTML;
    interalVal = interalVal.trim();

    switch(interalVal){
      case "=":
        try{
          setCalculate({ data: eval(calculate.data) });
        } catch {
          setCalculate({ data: 'ERROR!' });
        }
      break;
      case "AC":
        setCalculate({ data: '' });
      break;
      case "±":
        if(calculate.data.toString().charAt(0) !== "-")
          setCalculate({ data: "-" + calculate.data });
        else
          setCalculate({ data: calculate.data.replace("-", "") });  
      break;
      case "C":
        setCalculate({ data: calculate.data.slice(0, -1) });
      break;
      default:
        setCalculate({ data: calculate.data + interalVal });  
      break;
    }
  }

  return (
    <div className="container">
      <InputCalculate value={calculate.data}/>
      <ButtonCalculate handler={dataHandler}/>
    </div>
  );

}
