import React, {Component} from 'react';
import App from '../App';
import Page from './Page';

class Sounds extends Component {

    constructor(props){
        super(props);
      }
        state = {
        playlist:[],
        }
        number=this.props.soundNr;
     
    displaySound(){
        if (this.number===4){
            this.state.playlist.push("/Tecno1.mp3","/Tecno2.mp3","/Tecno3.mp3","/Tecno4.mp3")
        }
        if (this.number===5){
            this.state.playlist.push("/Jazz2.mp3","/Jazz2.mp3","/Jazz3.mp3","/Jazz4.mp3")
        }
        if (this.number===6){
            this.state.playlist.push("/Ringtone1.mp3","/Ringtone2.mp3","/Ringtone3.mp3","/Ringtone4.mp3")
        }
    }

    /*sendData() {
        console.log("Går inn i senddata");
        this.props.parentCallBack("HeiHeiHei");
    }*/

    render(){ 
        return(
            this.displaySound(),
           // console.log("Hei dette er moro for unga", this.state.playlist[0]),
            <audio src={this.state.playlist[0]} controls autoPlay/>
    );}
}
  
export default Sounds;