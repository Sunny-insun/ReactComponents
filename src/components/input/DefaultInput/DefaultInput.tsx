import React, { useState } from 'react';
import './DefaultButton.scss';

type InputProps = {
    label: string;
}

const DefaultInput : React.FC<InputProps> = ({label}) =>{

    let [input, setInput] : [string, any] = useState('') //state
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput(e.target.value);
      }
    return (
        <input onChange={handleInput} placeholder={label}></input>
    )
}

export default DefaultInput