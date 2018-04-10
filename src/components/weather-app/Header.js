import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="hubHeader text-center">
                <p className="hubSmallTitle">Welcome to</p>
                <p className="hubTitle">Weather Hub</p>

                <div className="form-group">
                    <label for="city">Select a city</label>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <select className="form-control" id="city" onChange={this.props.setCity}>
                                <option value="vancouver, bc">Vancouver</option>
                                <option value="edmonton, bc">Edmonton</option>
                                <option value="toronto, on">Toronto</option>
                                <option value="kelowna, bc">Kelowna</option>
                                <option value="langley, bc">Langley</option>
                            </select>
                        </div>
                    </div>
              </div>
            </div>
        );
    }
}

export default Header;