import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';


class Weather extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      result: ""
    };

    this.setCity = this.setCity.bind(this);

  }

  componentDidMount()
  {
    this.getWeather('vancouver, bc');
  }

  setCity(e)
  {
    let city = e.target ? e.target.value: 'vancouver, bc';
    this.getWeather(city);
  }

  getWeather(city)
  {
    axios.get(`https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}')`)
    .then( response => {
        this.setState(prevState => {
            return {
                ...prevState,
                result: response
            }
        });
    }).catch( error => {
        console.error(error);
    })
  }

  render() {
    return (
      <div className="App">
        <Header setCity={this.setCity}/>
        <Main weather={ {...this.state.result.data} }/>
      </div>
    );
  }
}

export default Weather;
