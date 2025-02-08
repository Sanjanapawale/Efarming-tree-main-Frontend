// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Registration from './Components/Registration';
import Login from './Components/Login';
import AdminHome from './Components/AdminHome';
import CustomerHome from './Components/CustomerHome';
import Logout from './Components/Logout';
import ProductDetails from './Components/ProductDetails';
import ChangePassword from './Routes/Farmer/ChangePassword';
import Profile from './Routes/Farmer/Profile';
import Product from './Routes/Farmer/Product';
import ProductDetail from './Routes/Farmer/ProductDetail';
import AProfile from './Routes/Admin/AProfile';
import AChangePassword from './Routes/Admin/AChangePassword';
import AddProductForm from './Routes/Farmer/AddProductForm';


function App() {
  const mystate = useSelector((state) => state.logged);
  

  return (
    <div className='App'>
      {mystate.loggedIn && (
        <nav className='navbar navbar-expand-sm bg-light mb-3'>
          <div className='container-fluid'>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <Link to="/admin_home" className="nav-link px-3"> Home </Link>
              </li>
              <li className='list-inline-item'>
                <Link to="F_register" className="nav-link px-3"> Farmer Registration </Link>
              </li>
              <li className='list-inline-item'>
                <Link to="C_register" className="nav-link px-3"> Customer Registration </Link>
              </li>
              <li className='list-inline-item'>
                <Link to="/logout" className="nav-link px-3"> Logout </Link>
              </li>
              <li className='list-inline-item'>
                <Link to="/farmer_home" className="nav-link px-3"> Farmer home page </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="admin_home" element={<AdminHome />} />
        <Route path="customer_home" element={<CustomerHome />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/products/:id/details" element={<ProductDetails />} />
        <Route path='password' element={<ChangePassword/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        <Route path='productdetail' element={<ProductDetail/>}></Route>
        <Route path='aprofile' element={<AProfile/>}></Route>
        <Route path='apassword' element={<AChangePassword/>}></Route>
        <Route path='addproduct' element={<AddProductForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
