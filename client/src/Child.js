import React, {Component} from "react";
import PropTypes from 'prop-types';
import RowHobby from "./RowHobby";


class Child extends Component{
    constructor(props) {
        super(props);
        this.hobbies = ['Sport', 'Information Technology', 'Psychology']
    }
    render() {
        const { name, year_birthday } = this.props
        //console.log(this.hobbies)
        const hobbies = <ul> { this.hobbies.map(hobby => <RowHobby description = { hobby } /> ) } </ul>
        return (
            <div>
                <p> My name is { name }. I was born in { year_birthday }. </p>
                <p> My hobbies:</p>
                    { hobbies }
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