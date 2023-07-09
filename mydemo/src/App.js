import './App.css';
import Home from './Guestuser/Home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Edit from './Guestuser/Edit';
import Signup from './Guestuser/Signup';
import Login from './Guestuser/Login';
import Homenew from './Guestuser/Homenew';
function App() {

  return ( 
     <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
        </Route>
        <Route path="/home" element={<Home/>}/>
        <Route path="/homen" element={<Homenew/>}/>
        <Route path="/sign" element={<Signup/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
  </BrowserRouter>
    </>
  );
}  

export default App;
