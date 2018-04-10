import React, { Component } from 'react';
import rain from '../../images/rain.png';
import partCloud from '../../images/partCloud.png';
import sun from '../../images/sun.png';
import mostCloud from '../../images/mostCloud.png';

class Main extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            condition: {},
            forecast: []
        };
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.weather !== this.props.weather)
        {
            let result = nextProps.weather.query.results.channel;
            this.setState(prevState => {
                return {
                    condition: {
                        title: result.item.title,
                        temp: result.item.condition.temp,
                        text: result.item.condition.text
                    },
                    forecast: result.item.forecast
                }
            })
        }
    }
    render() {
        return (
            <div className="hubMain">
                <div className="col-left text-center">
                  <p className="condition-title">{this.state.condition.title}</p>
                  <p>Temparature | <strong>{this.state.condition.temp}</strong></p>
                  <p>Condition | <strong>{this.state.condition.text}</strong></p>
                  <img src={this.state.condition.text === 'Mostly Cloudy' ? mostCloud : this.state.condition.text === 'Rain' ? rain : this.state.condition.text === 'Showers' ? rain : this.state.condition.text === 'Scattered Showers' ? rain : this.state.condition.text === 'Partly Cloudy' ? partCloud : this.state.condition.text === 'Cloudy' ? partCloud : sun}/>
                </div>

                <div className="col-right text-center">
                    {this.state.forecast.map( fore => (
                        <div className="forecast-list">
                            {fore.date} {fore.day} | High: {fore.high} | Low: {fore.low}
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Main;