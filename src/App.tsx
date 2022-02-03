import React, { useState } from 'react';
import DefaultButton from './components/DefaultButton/DefaultButton';

const App: React.FC = () => {

  const [name, setName] : [string, any] = useState('')

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <input onChange={handleInput}></input>
      <div>
        <DefaultButton content={name}/>
      </div>
    </div>
  );
}

export default App;
