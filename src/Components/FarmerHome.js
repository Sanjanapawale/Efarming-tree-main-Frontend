import React from 'react';
import { Link } from 'react-router-dom';

import FarmerProductsList from './FarmerProductsList';

export default function FarmerHome() {
    return (
        <div className='container'>
            <div>
                <nav className='navbar navbar-expand-sm bg-light mb-3' style={{ height: 50, padding: 0 }}>
                    <div className='container d-flex justify-content-center'>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <Link to="/logout" className="nav-link px-3"> Logout </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <h1>Farmer Home</h1>
            <FarmerProductsList />
        </div>
    )
}