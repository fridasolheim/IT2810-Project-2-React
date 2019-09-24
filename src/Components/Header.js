import React, {Component} from 'react';
import '../App.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ' ',
            shouldHide: true,
            headerText: " ",
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleChange(event){
        this.setState({value: event.target.value});
    };
    
    handleSubmit(event){
        //alert('A name was submitted: ' + this.state.value);
        this.setState({shouldHide: false});
        sessionStorage.setItem('userValue', this.state.value.toUpperCase());
        event.preventDefault();
        
    };
    
    render(){
        return (
        <div className='Header'>
            <h1 className="h1-header">WELCOME {sessionStorage.getItem('userValue')}</h1>
            <h5 className="h5-header">TO OUR RANDOM ART GENERATOR</h5>
            <div className="headerForm">
                <form style={this.state.shouldHide ? {} : { display: 'none' }}>
                    <div>
                        <input type="text" className="inputName" onChange={this.handleChange} placeholder="Who are you?"/>
                        <div onClick={this.handleSubmit} className="headerSubmit">SUBMIT</div>
                    </div>
                </form>
            </div>
        </div>
        );
    };
};

export default Header;