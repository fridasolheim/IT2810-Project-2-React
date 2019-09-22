import React,{Component} from 'react';
import kiwi from './kiwi.svg';
import './App.css';
import Header from './Components/Header';
import Checkboxes from './Components/Checkboxes';
import Tabs from './Components/Tabs';
import Page from './Components/Page';


class App extends Component {
   
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      chosenMedia: [null,null,null],
      chosenPicture: null,
      chosenSound: null,
      chosenText: null,
      teksten: null,
      
      animals: [
        {
          id: 1,
          title: 'Elephant',
          completed: true
        },
        {
          id: 2,
          title: 'Giraffe',
          completed: false
        },
        {
          id: 3,
          title: 'Zebra',
          completed: false
        }], 
      sounds:[
        {
          id: 4,
          title: 'Nature',
          completed: true
        },
        {
          id: 5,
          title: 'Jazz',
          completed: false
        },
        {
          id: 6,
          title: 'Telephone',
          completed: false
        }],
      text:[
        {
          id: 7,
          title: 'Lyrics',
          completed: true
        },
        {
          id: 8,
          title: 'Novel',
          completed: false
        },
        {
          id: 9,
          title: 'Poem',
          completed: false
        }
    ]}
}
  componentDidMount(){
    fetch("giraff1.svg")
      .then(response => response.text())
      .then(data =>{
        this.setState({
          teksten : data
        })
      })
  }

  // Toggle checked
  checked = (id) => {
    this.setState({
      animals: this.state.animals.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log("pic: ",id);
          this.state.chosenMedia.splice(0, 1, id); //splice-syntax: (index, how many elements to be deleted (here it removes its placeholder), element to be inserted)
        }
        return checkbox;
      }),
      sounds: this.state.sounds.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log("sound: ",id);
          this.state.chosenMedia.splice(1, 1, id);
        }
        return checkbox;
      }),
      text: this.state.text.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log("txt: ",id);
          this.state.chosenMedia.splice(2, 1, id);
        }
        console.log(this.state.chosenMedia);
        return checkbox;
      })
    });
  };

  //NB! handleClick/generate art must have been clicked before trying to save and fetch the numbers.
  handleSave = () => {
    //const {chosenPicture, chosenSound, chosenText} = this.state;
    localStorage.setItem('chosenPicture', this.state.chosenMedia[0]);
    localStorage.setItem('chosenSound', this.state.chosenMedia[1]);
    localStorage.setItem('chosenText', this.state.chosenMedia[2]);
    console.log("Numbers transmitted to local storage");
  }

  handleFetch = () => {
    const chosenPicture = localStorage.getItem('chosenPicture');
    const chosenSound = localStorage.getItem('chosenSound');
    const chosenText = localStorage.getItem('chosenText');
    this.setState({chosenPicture, chosenSound, chosenText});
    console.log("Fetched numbers: ", chosenPicture, chosenSound, chosenText)
    console.log(this.state.chosenPicture,this.state.chosenSound,this.state.chosenText)
  }
  
  //upon clicking generate art
  handleClick = () => {
    this.setState({chosenPicture: this.state.chosenMedia[0]});
    this.setState({chosenSound: this.state.chosenMedia[1]});
    this.setState({chosenText: this.state.chosenMedia[2]});
    console.log("handleClick clicked!");
    console.log("pic:" +this.state.chosenPicture,", sound:" +this.state.chosenSound,", text:" +this.state.chosenText);
  }

  handleClear= () => {
    this.setState({ chosenMedia: [] });
  }

render(){  
  return(
    <div className="App">
      <Header/>
      <div className="container1">
        <Tabs>
        <div label="Welcome">
          <div className="Content">
            <div className='image1'><img src={kiwi} className="kiwi-bird" alt="kiwi" /></div>
            <div className='text1'><h5>Hællæ</h5></div> 
          </div>
        </div>
        <div label="Page 1">
          <Page soundNr={this.state.chosenSound} ref="audio_tag1"/>
          <div dangerouslySetInnerHTML={{__html: this.state.teksten}}/>
        </div>
        <div label="Page 2">
          See ya later, <em>Alligator</em>!
          <Page soundNr={this.state.chosenSound} ref="audio_tag1"/>
        </div>
        <div label="Page 3">
          After 'while, <em>Crocodile</em>!
          <div dangerouslySetInnerHTML={{__html: this.state.teksten}}/>
        </div>
        <div label="Page 4">
          Heihei
        </div>
        </Tabs> 
        <div className= "checkboxesStyle">
          <h2>PICTURE</h2>
          <Checkboxes checkboxes={this.state.animals} checked={this.checked}/>
          <h2>SOUNDS</h2>
          <Checkboxes checkboxes={this.state.sounds} checked={this.checked}/>
          <h2>TEXT</h2>
          <Checkboxes checkboxes={this.state.text} checked={this.checked}/>
        </div>
      </div>    
      <div className='container2'>
        <div onClick={this.handleSave} className="buttonStyle">SAVE ART</div>
        <div onClick={this.handleFetch} className="buttonStyle">FETCH ART</div>
        <div onClick={this.handleClear} className="buttonStyle">CLEAR ART</div>
        <div onClick={this.handleClick} className="buttonStyle">GENERATE ART</div>
        
      </div>     
    </div>
  );
}};

export default App;

//{this.componentDidMount()}