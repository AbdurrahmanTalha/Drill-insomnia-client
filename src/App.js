import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import PurchaseItem from './Components/PurchaseItem';
import RequireAdmin from './Components/RequireAdmin';
import RequireAuth from './Components/RequireAuth';
import Blog from './Page/Blog/Blog';
import AddProduct from './Page/Dashboard/AddProduct';
import AddReview from './Page/Dashboard/AddReview';
import Dashboard from './Page/Dashboard/Dashboard';
import MyProfile from './Page/Dashboard/MyProfile';
import Orders from './Page/Dashboard/Orders';
import Home from './Page/Home/Home';
import Register from './Page/Login/Register';
import Signin from './Page/Login/Signin';
import MakeAdmin from "./Page/Dashboard/MakeAdmin"
import ManageOrder from "./Page/Dashboard/ManageOrder"
import ManageProduct from "./Page/Dashboard/ManageProduct"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Page/Dashboard/Payment';


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
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path="admin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
            <Route path="allOrder" element={<RequireAdmin><ManageOrder></ManageOrder></RequireAdmin>}></Route>
            <Route path="manageProducts" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>


          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </Navbar>
    </div>
  );
}

export default App;
