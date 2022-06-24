import React from "react";


const RowCity = (props) => {
    return (
        <React.Fragment>
            <li> {props.cityName} : {props.cityTemperature} °C</li>
        </React.Fragment>
    )
}

export default RowCity;