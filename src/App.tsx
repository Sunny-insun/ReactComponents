import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonPage from './pages/button/ButtonPage/ButtonPage';


const App = () => {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/button" element={<ButtonPage text={`버튼`}/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
