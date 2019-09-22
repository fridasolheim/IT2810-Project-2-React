import React, {Component} from 'react';
import Sounds from './Sounds';
​
​
class Page extends Component {
​
    constructor(props){
        super(props);
        //this.callBackFunction = this.callBackFunction.bind(this)
        this.state = {data: ""};
    }
​
    /*callBackFunction = (soundData) => {
        this.setState({message:soundData})
    }*/

    render(){
        return(
            <Sounds soundNr= {this.props.soundNr}/>
        );
    }
}
​
export default Page;