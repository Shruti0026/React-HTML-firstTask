import './App.css'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Userdata from './components/Userdata';
import Header from './components/Header';

function App() {
    return ( 
      <div className = 'App'>
        <Header />
          <Router>
            <Routes>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
                <Route path='/Userdata' element={<Userdata/>}></Route>    
            </Routes>
          </Router>
  
        
      </div>
    );
}

export default App;