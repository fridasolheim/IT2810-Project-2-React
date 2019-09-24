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
      activeTab:1,
      
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
          title: 'Dog',
          completed: false
        }], 
      sounds:[
        {
          id: 4,
          title: 'Techno',
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

  whichTab = (tab) => {
    this.setState ({
      activeTab: tab
    })
  }

render(){  
  return(
    <div className="App">
      <Header/>
      <div className="container1">
        <Tabs whichTab={this.whichTab}>
        <div label="Welcome">
          <div className="Content">
            <div className='image1'><img src={kiwi} className="kiwi-bird" alt="kiwi" /></div>
            <div className='text1'><h5>Hællæ</h5></div> 
          </div>
        </div>
        <div label="0">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} textNr={this.state.chosenText} activeTab={this.state.activeTab}/>
          
        </div>
        <div label="1">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} textNr={this.state.chosenText} activeTab={this.state.activeTab}/>
        </div>
        <div label="2">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} textNr={this.state.chosenText} activeTab={this.state.activeTab}/>
        </div>
        <div label="3">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} textNr={this.state.chosenText} activeTab={this.state.activeTab}/> 
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