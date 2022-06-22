import React, {Component} from "react";


class Child extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                I am the Son component of the App
            </div>
        )
    }
}

export default Child;