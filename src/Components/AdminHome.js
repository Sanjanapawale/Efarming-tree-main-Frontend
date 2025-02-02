import React from 'react';
import {Link} from 'react-router-dom';


export default function AdminHome() {
    return (
        <div>
            <nav className='navbar nacbar-expand-sm bg-light mb-3' style={{height:50, padding:0}}>
                <div className='container-fluid'>
                    <ul className='list-inline'>
                        <li className='list-inline-item'>
                            <Link to="farmers" className="nav-link px-3"> View Farmers </Link>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="Customers" className="nav-link px-3"> View Customers </Link>
                        </li>
                        <li className='list-inline-item'>
                            <Link to="/logout" className="nav-link px-3"> Logout </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1>Admin Home</h1>
        </div>
    )
}