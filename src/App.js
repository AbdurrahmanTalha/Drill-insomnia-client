import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Page/Home/Home';
import Register from './Page/Login/Register';
import Signin from './Page/Login/Signin';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Signin></Signin>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>      
    </div>
  );
}

export default App;
