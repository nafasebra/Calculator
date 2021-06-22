import React from 'react';

import './InputCalculate.css';

export default function InputCalculate({ value }) {
    return (
        <div className="input-calculate">
            <input type="text" value={value} placeholder="0" readOnly/>
        </div>
    );
}
