import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component {
    constructor(){
        super();
        console.log('Parent Constructor');
    }
    componentDidMount() {
        console.log('Parent Component Did Mount');
    }
    render(){
        console.log('Parent render load');
        return (
            <div className="about-container">
                <h1>Parent About of User Class</h1>
                <UserClass name={"murshida"} address={"shela"}/>
            </div>
        )
    }
}

export default About;