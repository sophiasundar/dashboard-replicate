import './App.css';
import React, { useState } from 'react';
import { Route, Routes, link } from 'react-router-dom';
import Dashboard from './Components1/Dashboard/Dashboard'
import ButtonPage from './Components1/interfaceComponents/buttons/buttonMain';
import Cards from './Components1/interfaceComponents/cards/Cards';
import Colors from './Components1/Utilities1/Colors/Colors';
import Borders from './Components1/Utilities1/Border';
import Animations from './Components1/Utilities1/Animations';
import Others from './Components1/Utilities1/Other';
import Login from './Components1/Addons/login';
import Register from './Components1/Addons/Register';
import ForgotPassword from './Components1/Addons/ForgotPassword';
import ErrorPage from './Components1/Addons/Error';
import BlankPage from './Components1/Addons/Blank';
import Charts from './Components1/charts/Charts';
import Tables from './Components1/Tables/tables';

function App() {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleOpen1 = () => {
    setOpen1(!open1)
  }
  const handleOpen2 = () => {
    setOpen2(!open2)
  }


   return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Dashboard open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
    
    <Route path="/dashboard" element={<Dashboard open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        
        <Route path="/buttons" element={<ButtonPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        
        <Route path="/cards" element={<Cards open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        
        <Route path="/colors" element={<Colors open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        
        <Route path="/borders" element={<Borders open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2} />} />
        
        <Route path="/animations" element={<Animations open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        
        <Route path="/others" element={<Others open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        
        <Route path="/login" element={<Login />} />
        
        <Route path="/register" element={<Register />} />
        
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        
        <Route path="/errorpage" element={<ErrorPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        
        <Route path="/blankpage" element={<BlankPage open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />
        
        <Route path="/charts" element={<Charts open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} /> 
        
        <Route path="/tables" element={<Tables open={open} setOpen={setOpen} handleOpen={handleOpen} open1={open1}
          setOpen1={setOpen1} handleOpen1={handleOpen1} open2={open2} setOpen2={setOpen2} handleOpen2={handleOpen2}/>} />


     </Routes>
       



    </div>
  );
}

export default App;
