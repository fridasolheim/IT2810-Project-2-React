import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';


export class Checkbox extends Component{

    render(){
        const{id, title} = this.props.choice;
        return(
            <div className='checkboxesStyle'>
               {/*/ <p>
                    <input type='checkbox' onChange={this.props.checked.bind(this, id)} /> {' '}
                    {title}
               </p>*/}

                <span><input type='checkbox' onChange={this.props.checked.bind(this, id)} />{' '}{title}</span>
                
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

/*
    <form className='checkBoxes'>
        <h2>IMAGE</h2>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Zebra
        </label>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Giraffe
        </label>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Elephant
        </label>
        <h2>SOUND</h2>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Nature
        </label>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Jazz
        </label>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Telephone
        </label>
        <h2>TEXT</h2>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Lyrics
        </label>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Novel
        </label>
        <label className='checkboxes'><input name="isGoing" type="checkbox"/>Poem
        </label>
    </form>

    */
