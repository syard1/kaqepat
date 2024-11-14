import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Message from './pages/Message/Message';
import Task from './pages/Task/Task';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/message" element={<Message></Message>} />
    <Route path='/task' element={<Task></Task>} />


   </Routes>
   </BrowserRouter>


   </>
  );
}

export default App;
