import React from 'react';
import {Link} from 'react-router-dom';


export default function CustomerHome() {
    return (
        <div>
            <nav className='navbar nacbar-expand-sm bg-light mb-3' style={{height:50,padding:0}}>
                <div className='container d-flex justify-content-center align-items-center vh-100'>
                    <ul className='list-inline'>
                        <li className='list-inline-item'>
                            <Link to="/logout" className="nav-link px-3"> Logout </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1>Customer Home</h1>
        </div>
    )
}