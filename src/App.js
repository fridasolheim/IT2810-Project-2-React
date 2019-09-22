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
      chosenMedia:[],
      chosenPicture: 1,
      chosenSound: 5,
      chosenText: 7,
      activeTab: 1,
      
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
          console.log(id);
          this.state.chosenMedia.push(id);
        }
        return checkbox;
      }),
      sounds: this.state.sounds.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log(id);
          this.state.chosenMedia.push(id);
        }
        return checkbox;
      }),
      text: this.state.text.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log(id);
          this.state.chosenMedia.push(id);
          console.log(this.state.chosenMedia);
        }
        return checkbox;
      })
    });
  };

  //NB! handleClick/generate art must have been clicked before trying to save and fetch the numbers.
  handleSave = () => {
    const {chosenPicture, chosenSound, chosenText} = this.state;
    localStorage.setItem('chosenPicture', this.state.chosenPicture);
    localStorage.setItem('chosenSound', this.state.chosenSound);
    localStorage.setItem('chosenText', this.state.chosenText);
    console.log("Numbers transmitted to local storage");
  };

  handleFetch = () => {
    const chosenPicture = localStorage.getItem('chosenPicture');
    const chosenSound = localStorage.getItem('chosenSound');
    const chosenText = localStorage.getItem('chosenText');
    this.setState({chosenPicture, chosenSound, chosenText});
    console.log("Fetched numbers: ", chosenPicture, chosenSound, chosenText)
    console.log(this.state.chosenPicture,this.state.chosenSound,this.state.chosenText)
  };
  
  //upon clicking generate art
  handleClick () {
    for (var element in this.state.chosenMedia){
      if (this.state.chosenMedia[element]<4){
        this.setState({chosenPicture: this.state.chosenMedia[element]});
      }
      if (this.state.chosenMedia[element]>3 && this.state.chosenMedia[element]<7){
        this.setState({chosenSound: this.state.chosenMedia[element]});
      }
      if (this.state.chosenMedia[element]>6){
        this.setState({chosenText: this.state.chosenMedia[element]});
      }
    }  
    console.log("Pic:"+this.state.chosenPicture,",Sound:"+this.state.chosenSound,",Text:"+this.state.chosenText)
  }
  handleClear(){
    //this.setState({chosenMedia: []})
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
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} activeTab={this.state.activeTab}/>
          
        </div>
        <div label="1">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture}activeTab={this.state.activeTab}/>
        </div>
        <div label="2">
          After 'while, <em>Crocodile</em>!
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture}activeTab={this.state.activeTab}/>
        </div>
        <div label="3">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture}activeTab={this.state.activeTab}/> 
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
        <div onClick={this.handleClick} className="buttonStyle">GENERATE ART</div>
        <div onClick={this.handleClear} className="buttonStyle">CLEAR ART</div>
      </div>     
    </div>
  );
}};

export default App;

//{this.componentDidMount()}