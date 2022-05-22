import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import PurchaseItem from './Components/PurchaseItem';
import RequireAuth from './Components/RequireAuth';
import Blog from './Page/Blog/Blog';
import AddReview from './Page/Dashboard/AddReview';
import Dashboard from './Page/Dashboard/Dashboard';
import MyProfile from './Page/Dashboard/MyProfile';
import Orders from './Page/Dashboard/Orders';
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
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/purchase/:drillId" element={<RequireAuth><PurchaseItem></PurchaseItem></RequireAuth>}></Route>
          <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<Orders></Orders>}></Route>
            <Route path="review" element={<AddReview></AddReview>}></Route>
            <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>      
    </div>
  );
}

export default App;
