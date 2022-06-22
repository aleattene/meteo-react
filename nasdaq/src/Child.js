import React, {Component} from "react";


class Child extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                I am the Child component of the App and my name is { this.props.name }.
            </div>
        );
    };
}

export default Child;