import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <ul className="nav main_nav">
        <li className="nav-item">
            <Link className="nav-link" to ="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to = "/car-list">Car List</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/todo-list">Todo List</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/weather-app">Weather App</Link>
        </li>
    </ul>
);

export default Nav;