import React, {Component} from "react";
// import PropTypes from 'prop-types';
// import RowCity from "./RowCity";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { search : 'Apple' }
    }
    onChangeSearch = (e) => {
        this.setState( { search: e.target.value })
    }

    render() {
        return (
            <form>
                <input
                    type = "text"
                    name = "search"
                    value = { this.state.search }
                    onChange = { this.onChangeSearch }
                />
            </form>
        );
    };
}



export default SearchForm;