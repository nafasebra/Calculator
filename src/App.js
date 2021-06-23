import React from 'react';

import InputCalculate from './component/InputCalculate';
import ButtonCalculate from './component/ButtonsCalculate';

import './App.css';

export default function App() {
  const [calculate, setCalulate] = React.useState({
    data: ''
  });

  let dataHandler = (e) => {
    e.preventDefault();
    let interalVal = e.target.innerHTML;
    interalVal = interalVal.trim();

    switch(interalVal){
      case "=":
        setCalulate({ data: eval(calculate.data) });
      break;
      case "AC":
        setCalulate({ data: '' });
      break;
      case "±":
        if(calculate.data.charAt(0) !== "-")
          setCalulate({ data: "-" + calculate.data });
      break;
      case "«":
        setCalulate({ data: calculate.data.slice(0, -1) });
      break;
      default:
        setCalulate({ data: calculate.data + interalVal });  
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
