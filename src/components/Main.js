import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import App from '../App';
import Todo from './todo-list/Todo';
import Weather from './weather-app/Weather';

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/todo-list" component={Todo} />
            <Route path="/weather-app" component={Weather} />
        </Switch>
    </div>
)
export default Main