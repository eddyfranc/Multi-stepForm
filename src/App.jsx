import React from 'react';
import Form from './Components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;