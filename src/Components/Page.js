import React, {Component} from 'react';

class Page extends Component {

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
    
    //fetch image from public 
    getImage(){
        this.displayPicture()
        var nummer = parseInt(this.props.activeTab-1)
        var bildePath=this.state.bildeListe[nummer];
        fetch(bildePath)
          .then(response => response.text())
          .then(data =>{
            this.setState({
              bildeTittel : data
            })
          })
    }
    //fetch text from public 
    getText(){
        this.displayText()
        var nummer = parseInt(this.props.activeTab-1)
        var textPath=this.state.tekstListe[nummer];
        fetch(textPath)
          .then(response => response.text())
          .then(data =>{
            this.setState({
              tekstTittel : data
            })
          })
    }
    //fetch sound from public 
    getSound(){
        this.displaySound()
        var nummer = parseInt(this.props.activeTab-1)
        this.setState({lyd: this.state.playlist[nummer]});
    }

    componentDidMount() {
        this.getImage()
        this.getText()
        this.getSound()
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeTab !== prevProps.activeTab) {
            this.getImage()
            this.getText()
            this.getSound()
        }  
    }
    
    //push selected category to list
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
    //push selected category to list
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
    //push selected category to list
    displaySound(){
        if (this.soundNumber===4){
            this.state.playlist.push("/Tecno1.mp3","/Tecno2.mp3","/Tecno3.mp3","/Tecno4.mp3")
        }
        if (this.soundNumber===5){
            this.state.playlist.push("/Jazz1.mp3","/Jazz2.mp3","/Jazz3.mp3","/Jazz4.mp3")
        }
        if (this.soundNumber===6){
            this.state.playlist.push("/Ringtone1.mp3","/Ringtone2.mp3","/Ringtone3.mp3","/Ringtone4.mp3")
        }
    }
    
    render(){
        return(
            <div>
                <div className="Content">
                    <div className="subContent">
                        <div dangerouslySetInnerHTML={{__html: this.state.bildeTittel}}/>
                        <div className="image1" dangerouslySetInnerHTML={{__html: this.state.tekstTittel}}/>
                    </div>
                    <div className="break"></div>
                        <audio controls autoPlay>
                            <source src={process.env.PUBLIC_URL + this.state.lyd} type="audio/mpeg"/>
                        </audio>
                </div>
            </div>
        );
    }
}

export default Page;