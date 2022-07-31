import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addlist from './components/Add list';
import Home from "./components/Home";
import List from './components/List';
import Edit from './components/Edit list';
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route  path="/" element={<Home/>}></Route>
       <Route  path="/Addlist" element={<Addlist/>}></Route>
       <Route  path="/edit/:id" element={<Edit/>}></Route>
       </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
