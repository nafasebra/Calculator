import React from 'react';

import InputCalculate from './component/InputCalculate';
import ButtonCalculate from './component/ButtonsCalculate';

import './App.css';

export default function App() {
  const [calculate, setCalulate] = React.useState({
    data: '',
    equal: 0
  });

  let dataHandler = (e) => {
    e.preventDefault();
    let interalVal = e.target.innerHTML;
    interalVal = interalVal.trim();
    setCalulate({ data: calculate.data + interalVal });

    if(interalVal === "=")
      console.log(interalVal);
  }

  return (
    <div className="container">
      <InputCalculate value={calculate.data}/>
      <ButtonCalculate handler={dataHandler}/>
    </div>
  );

}
