import React from 'react';

const Home = () => (
    <div className="mt-5">
        <h3 className="text-center mt-5 mb-5">
            Welcome to Kate's Final Project
        </h3>
        <ul>
            <li>
                Car List - It displays cars using map function from the car array 
            </li>
            <li>
                Todo List - You can update / delete the todo list
            </li>
            <li>
                Weather App - Current weather of five cities
            </li>
        </ul>
        <h4 className="text-center mt-5">
            Say Hi!
        </h4>
        <div id="socialicons" className="text-center">
            <a className="icon" href="mailto:yeeumm@gmail.com" target="_blank"><i className="far fa-envelope-open fa-2x"/></a>
            <a className="icon" href="https://www.linkedin.com/in/yeeum-lee-b3a971139/" target="_blank"><i className="fab fa-linkedin-in fa-2x"/></a>
            <a className="icon" href="https://github.com/yiyeum" target="_blank"><i className="fab fa-github fa-2x"/></a>
        </div>
    </div>
);

export default Home;