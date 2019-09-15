import React, {Component} from 'react';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';

class Checkboxes extends Component{
    render(){
        return this.props.checkboxes.map((choice) => (
        <Checkbox key={choice.id} choice={choice} checked={this.props.checked} />
        ));
    }
}

// Proptypes

Checkboxes.propTypes = {
    checkboxes: PropTypes.array.isRequired,
    checked: PropTypes.func.isRequired
}

export default Checkboxes;