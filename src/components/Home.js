import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/todo-list">Todo List</Link>
                    </li>
                    <li>
                        <Link to="/weather-app">Weather App</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;