import React, {Component} from "react";
import PropTypes from 'prop-types';
import RowCity from "./RowCity";


class Child extends Component{
    constructor(props) {
        super(props);
        this.cities = ['Milano', 'Roma', 'Ancona', 'Cagliari', 'Olbia']
        this.state = { temperature: 1 }
        setInterval(() => this.updateStatus(), 3000)
    }
    updateStatus = () => this.setState((state, props) => ({ temperature: state.temperature + 0.01 }))
    render() {

        const temperature = this.state.temperature
        const cities = <ul> { this.cities.map(city => <RowCity cityName = { city } cityTemperature = { temperature.toFixed(2) }/> ) } </ul>
        return (
            <div>
                <p> { cities } </p>
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