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
            <Route path="/car-list" component={Car} />
            <Route path="/todo-list" component={Todo} />
            <Route path="/weather-app" component={Weather} />
            <Route component={NotFound} />
        </Switch>
    </div>
);
export default Main