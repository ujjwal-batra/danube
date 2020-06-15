import React, { Component } from 'react';
import { Router,Link } from 'react-router-dom';
// import main from './main.js';

class Homeform extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>
                <div className="header">
                    <h1>DANUBE</h1>
                    <h3>We provide courses</h3>
                </div>
                <div className="container">
                    <div className="content">
                        <form className="homeform">
                            <div>
                                <label>Country of origin</label>
                                <input type="text" />
                            </div>
                            
                            <div>
                                <label>Country of destination</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Gender</label>
                                <select name="cars" id="cars">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div>
                                <label>Age</label>
                                <input type="Number" />
                            </div>
                            
                            <button><Link to={"/course"}>SEE COURSES</Link></button>
                        </form>
                        <div id="map"></div>
                        {/* <img src="https://lh3.googleusercontent.com/proxy/ugcTnwoVoAlXtM7fUeM8f3eYfFYjCrDCOsqzC29P6eFt9cz5fuShih4mli8KKIPwpVx6pdXbfXxTU8MVjbW4EXERBZkopqFQguHiv6C3ezwZEqPWuZdKZqE2aTMPgUetol4tQ2Vn-Ncv1IZENq4" /> */}
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default Homeform;