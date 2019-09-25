import React, {Component} from 'react';
import Sounds from './Sounds'

class Page extends Component {
    constructor(props){
        super(props);
    }

    state = {
        data: "",
        bildeTittel: null,
        bildeListe:[], 
        playlist:[],
        tekstListe:[],
        lyd: null
        } ;
    
    soundNumber=this.props.soundNr;
    picNumber=this.props.pictureNr;
    textNumber=this.props.textNr;
    

    getImage(){
        this.displayPicture()
        var nummer = parseInt(this.props.activeTab)
        var bildePath=this.state.bildeListe[nummer];
        fetch(bildePath)
          .then(response => response.text())
          .then(data =>{
            this.setState({
              bildeTittel : data
            })
          })
    }

    getText(){
        this.displayText()
        var nummer = parseInt(this.props.activeTab)
        var textPath=this.state.tekstListe[nummer];
        fetch(textPath)
          .then(response => response.text())
          .then(data =>{
            this.setState({
              tekstTittel : data
            })
          })
    }

    getSound(){
        this.displaySound()
        var nummer = parseInt(this.props.activeTab)
        this.setState({lyd: this.state.playlist[nummer]});

    }

    componentDidMount() {
        this.getImage()
        this.getText()
        this.getSound()
        console.log(this.props.activeTab)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.activeTab !== prevProps.activeTab) {
            this.getImage()
            this.getText()
            this.getSound()
            console.log(this.props.activeTab)
        }
       
    }
      

     displayPicture(){
        if (this.picNumber===1){
            this.state.bildeListe.push("Elephant1.svg","elefant2.svg","elefant3.svg","Elephant4.svg")
        }
        if (this.picNumber===2){
            this.state.bildeListe.push("giraff1.svg","giraffe2.svg","Giraffe3.svg","giraffe4.svg")
        }
        if (this.picNumber===3){
            this.state.bildeListe.push("Dog1.svg","Dog2.svg","Dog3.svg","Dog4.svg")
        }
    }

    displayText(){
        if (this.textNumber===7){
            this.state.tekstListe.push("Poem1.json","Poem2.json","Poem3.json","Poem4.json")
        }
        if (this.textNumber===8){
            this.state.tekstListe.push("Novel1.json","Novel2.json","Novel3.json","Novel4.json")
        }
        if (this.textNumber===9){
            this.state.tekstListe.push("Lyrics1.json","Lyrics2.json","Lyrics3.json","Lyrics4.json")
        }
    }

    displaySound(){
        if (this.soundNumber===4){
            this.state.playlist.push("/Tecno1.mp3","/Tecno2.mp3","/Tecno3.mp3","/Tecno4.mp3")
        }
        if (this.soundNumber===5){
            this.state.playlist.push("/Jazz2.mp3","/Jazz2.mp3","/Jazz3.mp3","/Jazz4.mp3")
        }
        if (this.soundNumber===6){
            this.state.playlist.push("/Ringtone1.mp3","/Ringtone2.mp3","/Ringtone3.mp3","/Ringtone4.mp3")
        }
    }

    render(){
        return(
            <div>
                <div className="Content">
                    <div  dangerouslySetInnerHTML={{__html: this.state.bildeTittel}}/>
                    <div  className="image1"><div  className="image1" dangerouslySetInnerHTML={{__html: this.state.tekstTittel}}/></div>
                </div>
                <audio src={this.state.lyd} controls autoPlay/>,
            </div>
        );
    }
}
export default Page;