import React,{Component} from 'react';
import kiwi from './kiwi.svg';
import './App.css';
import Header from './Components/Header';
import Tabs from './Components/Tabs';
import Page from './Components/Page';


class App extends Component {
   
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      //states for currently selected media category
      chosenPicture: 1,
      chosenSound: 4,
      chosenText: 7,
      activeTab:1,
      //states for media categories
      pictures: [
        {
          id: 1,
          title: 'Elephant',
          completed: true,
        },
        {
          id: 2,
          title: 'Giraffe',
          completed: false,
        },
        {
          id: 3,
          title: 'Dog',
          completed: false,
        }], 
      sounds:[
        {
          id: 4,
          title: 'Techno',
          completed: true,
        },
        {
          id: 5,
          title: 'Jazz',
          completed: false,
        },
        {
          id: 6,
          title: 'Telephone',
          completed: false,
        }],
      text:[
        {
          id: 7,
          title: 'Poem',
          completed: true,
        },
        {
          id: 8,
          title: 'Novel',
          completed: false,
        },
        {
          id: 9,
          title: 'Lyrics',
          completed: false,
        }
    ]}
}
  //Save art to local storage
  handleSave = () => {
    localStorage.setItem('chosenPicture', this.state.chosenPicture);
    localStorage.setItem('chosenSound', this.state.chosenSound);
    localStorage.setItem('chosenText', this.state.chosenText);
    console.log("Numbers transmitted to local storage");
    alert("Art saved, you can press 'Fetch Art' anytime to see your saved art")
  }
  //Fetch art from local storage
  handleFetch = () => {
    this.setState({chosenPicture: Number(localStorage.getItem('chosenPicture'))});
    this.setState({chosenSound: Number(localStorage.getItem('chosenSound'))});
    this.setState({chosenText: Number(localStorage.getItem('chosenText'))});
    alert("Art fetched, check your tabs to se your saved art")
  }

  //Upon clicking "generate art"
  handleClick = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    alert("Art generated! Check your tabs to see your collection")
  }

  //Keep track of active tab
  whichTab = (tab) => {
    this.setState ({
      activeTab: tab
    })
  }
  
  //Function for handling change in radio buttons
  handleOptionChange = changeEvent => {
      if((Number(changeEvent.target.value))<4){
        this.setState({chosenPicture: Number(changeEvent.target.value)})
      }
      else if((Number(changeEvent.target.value))>3 && (Number(changeEvent.target.value))<7){
        this.setState({chosenSound: Number(changeEvent.target.value)})
      }
      else if((Number(changeEvent.target.value))>6){
        this.setState({chosenText: Number(changeEvent.target.value)})
      }
  };

//Render function for app, including containers, tabs, page rendering and radio buttons. 
render(){  
  return(
    <div className="App">
      <Header/>
      <div className="container1">
        <Tabs className="Tabs" whichTab={this.whichTab}>
        <div label="Welcome" className="mediaContent">
            <div className='image1'><img src={kiwi} className="kiwi-bird" alt="kiwi" /></div>
            <div className='text1'><h5>Create your own Gallery</h5><p>1. Choose one category for picture, sound and text </p>
            <p>2. Press "Generate art"</p><p>3. Click on the tabs to see your collection</p><p>4. Click "Save art" to save the collection</p></div> 
        </div>
        <div label="1" classname="mediaContent">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} textNr={this.state.chosenText} activeTab={this.state.activeTab}/>    
        </div>
        <div label="2" classname="mediaContent">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} textNr={this.state.chosenText} activeTab={this.state.activeTab}/>
        </div>
        <div label="3" classname="mediaContent">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} textNr={this.state.chosenText} activeTab={this.state.activeTab}/>
        </div>
        <div label="4" classname="mediaContent">
          <Page soundNr={this.state.chosenSound} pictureNr={this.state.chosenPicture} textNr={this.state.chosenText} activeTab={this.state.activeTab}/> 
        </div>
        </Tabs> 
        <div className= "checkboxesStyle">
          <h2>PICTURE</h2>
          <form>
          <div className="pictures">
          <label>
              <input type="radio" name="picturesGroup" value="1" className="form-check-input" checked={this.state.chosenPicture === 1} onChange={this.handleOptionChange}/>
              Elephant
            </label>
          </div>
          <div className="pictures">
            <label>
              <input type="radio" name="picturesGroup" value="2" className="form-check-input" checked={this.state.chosenPicture === 2} onChange={this.handleOptionChange}/>
              Giraffe
            </label>
          </div>
          <div className="pictures">
            <label>
              <input type="radio" name="picturesGroup" value="3" className="form-check-input" checked={this.state.chosenPicture === 3} onChange={this.handleOptionChange}/>
              Dog
            </label>
          </div>
      </form>
          <h2>SOUNDS</h2>
          <form>
          <div className="sounds">
          <label>
              <input type="radio" name="soundsGroup" value="4" className="form-check-input-2" checked={this.state.chosenSound === 4} onChange={this.handleOptionChange}/>
              Techno
            </label>
          </div>
          <div className="sounds">
            <label>
              <input type="radio" name="soundsGroup" value="5" className="form-check-input-2" checked={this.state.chosenSound === 5} onChange={this.handleOptionChange}/>
              Jazz
            </label>
          </div>
          <div className="sounds">
            <label>
              <input type="radio" name="soundsGroup" value="6" className="form-check-input-2" checked={this.state.chosenSound === 6} onChange={this.handleOptionChange}/>
              Ringtone
            </label>
          </div>
      </form>
          <h2>TEXT</h2>
          <form>
          <div className="text">
          <label>
              <input type="radio" name="textGroup" value="7" className="form-check-input-3" checked={this.state.chosenText === 7} onChange={this.handleOptionChange}/>
              Poem
            </label>
          </div>
          <div className="text">
            <label>
              <input type="radio" name="textGroup" value="8" className="form-check-input-3" checked={this.state.chosenText === 8} onChange={this.handleOptionChange}/>
              Novel
            </label>
          </div>
          <div className="text">
            <label>
              <input type="radio" name="textGroup" value="9" className="form-check-input-3" checked={this.state.chosenText === 9} onChange={this.handleOptionChange}/>
              Lyrics
            </label>
          </div>
      </form>
      </div>
      </div>    
      <div className='container2'>
        <div onClick={this.handleSave} className="buttonStyle">SAVE ART</div>
        <div onClick={this.handleFetch} className="buttonStyle">FETCH ART</div>
        <div onClick={this.handleClick} type="submit" className="buttonStyle">GENERATE ART</div>
      </div>     
    </div>
  );
}};
export default App;