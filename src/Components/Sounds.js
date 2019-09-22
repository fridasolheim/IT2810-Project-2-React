import React, {Component} from 'react';
//import Jazz3 from '../Jazz3.mp3'
/*import Jazz4 from '../Jazz4.mp3'
import Ringetone1 from '../Ringetone1.mp3'
import Ringetone2 from '../Ringetone2.mp3'
import Ringetone3 from '../Ringetone3.mp3'
import Ringetone4 from '../Ringetone4.mp3'
import Tecno1 from '../Tecno1.mp3'
import Tecno2 from '../Tecno2.mp3'
import Tecno3 from '../Tecno3.mp3'
import Tecno4 from '../Tecno4.mp3'*/
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
            this.state.playlist.push("/Ringetone1.mp3","/Ringetone2.mp3","/Ringetone3.mp3","/Ringetone4.mp3")
        }
        if (this.number===6){
            this.state.playlist.push("/Ringetone1.mp3","/Ringetone2.mp3","/Ringetone3.mp3","/Ringetone4.mp3")
        }
    }

    /*sendData() {
        console.log("Går inn i senddata");
        this.props.parentCallBack("HeiHeiHei");
    }*/

    render(){ 
        return(
            this.displaySound(),
            console.log("Hei dette er moro for unga", this.state.playlist[0]),
            <audio src={this.state.playlist[0]} controls autoPlay/>
    );}
}
  
export default Sounds;