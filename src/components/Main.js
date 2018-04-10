import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import App from '../App';
import Todo from './todo-list/Todo';
import Weather from './weather-app/Weather';
import Car from './car-list/Car';
import NotFound from './404';

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/car-list" component={Car} />
            <Route path="/projects/todo-list" component={Todo} />
            <Route path="/projects/weather-app" component={Weather} />
            <Route component={NotFound} />
        </Switch>
    </div>
);
export default Main