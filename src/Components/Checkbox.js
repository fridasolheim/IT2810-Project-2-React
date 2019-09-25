import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';


export class Checkbox extends Component{

    render(){
        const{id, title} = this.props.choice;
        return(
            <div className='checkboxesStyle'>
                <span><input type='radio' onChange={this.props.checked.bind(this, id)} />{' '}{title}</span>
            </div>
        )
    }
}

// Proptypes

Checkbox.propTypes = {
    choice: PropTypes.object.isRequired,
    checked: PropTypes.func.isRequired
}

export default Checkbox;
