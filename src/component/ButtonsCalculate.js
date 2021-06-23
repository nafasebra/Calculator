import React from 'react';

import './ButtonsCalculate.css';

export default function App({ handler }) {

    return (
        <div className="buttons-calculate">
            <button onClick={(e) => handler(e)}> AC </button>
            <button onClick={(e) => handler(e)}> C </button>
            <button onClick={(e) => handler(e)}> % </button>
            <button onClick={(e) => handler(e)}> / </button>

            <button onClick={(e) => handler(e)}> 7 </button>
            <button onClick={(e) => handler(e)}> 8 </button>
            <button onClick={(e) => handler(e)}> 9 </button>
            <button onClick={(e) => handler(e)}> * </button>
            
            <button onClick={(e) => handler(e)}> 4 </button>
            <button onClick={(e) => handler(e)}> 5 </button>
            <button onClick={(e) => handler(e)}> 6 </button>
            <button onClick={(e) => handler(e)}> - </button>
            
            <button onClick={(e) => handler(e)}> 1 </button>
            <button onClick={(e) => handler(e)}> 2 </button>
            <button onClick={(e) => handler(e)}> 3 </button>
            <button onClick={(e) => handler(e)}> + </button>
            
            <button onClick={(e) => handler(e)}> &plusmn; </button>
            <button onClick={(e) => handler(e)}> 0 </button>
            <button onClick={(e) => handler(e)}> . </button>
            <button onClick={(e) => handler(e)}> = </button>
        </div>
    );
  
}
