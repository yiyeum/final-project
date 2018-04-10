import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <ul className="nav main_nav">
        <li className="nav-item">
            <NavLink exact activeStyle={{ fontWeight: 'bold', color: 'salmon' }} className="nav-link" to ="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'salmon' }} className="nav-link" to = "/projects/car-list">Car List</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'salmon' }} className="nav-link" to="/projects/todo-list">Todo List</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'salmon' }} className="nav-link" to="/projects/weather-app">Weather App</NavLink>
        </li>
    </ul>
);

export default Nav;