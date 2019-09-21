import React,{Component} from 'react';
import Sounds from './Sounds'



class Page extends Component {

    constructor(props){
        super(props);
        
      }

    render(){
        return(

        <Sounds soundNr={this.props.soundNr}/>
        );
    }

}

export default Page;