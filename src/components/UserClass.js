import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name:"Dummy",
                location: "location"
            }
        }
        console.log('UserClass Child Constructor')
    }
    async componentDidMount() {
        // This called after first render only.
        console.log('Child Component Did Mount');
        const data = await fetch("https://api.github.com/users/Mohammadshahid");
        const json = await data.json();

        this.setState ({
            userInfo:json
        })
    }

    componentDidUpdate() {
        // This called after every sub-sequence render() will be called.
    }

    componentWillUnmount() {
        // This use when we are leaving component.
    }
    
    render(){
        const { name, location } = this.state.userInfo;
        console.log('UserClass render load');

        return (
            <div className="user-detail">
                <h3>Class Components</h3>
                <h3>Name : {name} </h3>
                <h3>Address : {location}</h3>
            </div>
        )
    }
}

export default UserClass;