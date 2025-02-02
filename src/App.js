// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Registration from './Components/Registration';
import Login from './Components/Login';
import AdminHome from './Components/AdminHome';
import FarmerHome from './Components/FarmerHome';
import CustomerHome from './Components/CustomerHome';
import Logout from './Components/Logout';
import ProductDetails from './Components/ProductDetails';

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
        <Route path="farmer_home" element={<FarmerHome />} />
        <Route path="customer_home" element={<CustomerHome />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/products/:id/details" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
