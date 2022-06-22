import React, {Component} from "react";
import PropTypes from 'prop-types';


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


Child.defaultProps = {
    name: "-----"
}

Child.propTypes = {
    name: PropTypes.string,
    // name: PropTypes.number // Don't work. Why ????
}


export default Child;