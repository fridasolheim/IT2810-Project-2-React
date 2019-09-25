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
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      chosenMedia: [null,null,null],
      chosenPicture: null,
      chosenSound: null,
      chosenText: null,
      activeTab:1,
      
      pictures: [
        {
          id: 1,
          title: 'Elephant',
          completed: true,
          group: 1
        },
        {
          id: 2,
          title: 'Giraffe',
          completed: false,
          group: 1
          
        },
        {
          id: 3,
          title: 'Dog',
          completed: false,
          group: 1
        }], 
      sounds:[
        {
          id: 4,
          title: 'Techno',
          completed: true,
          group: 2
        },
        {
          id: 5,
          title: 'Jazz',
          completed: false,
          group: 2
        },
        {
          id: 6,
          title: 'Telephone',
          completed: false,
          group: 2
        }],
      text:[
        {
          id: 7,
          title: 'Poem',
          completed: true,
          group: 3
        },
        {
          id: 8,
          title: 'Novel',
          completed: false,
          group: 3
        },
        {
          id: 9,
          title: 'Lyrics',
          completed: false,
          group: 3
        }
    ]}
}

  // Toggle checked
  checked = (id) => {
    this.setState({
      pictures: this.state.pictures.map((radio) => {
        if (radio.id === id){
          radio.completed = !radio.completed
          console.log("pic: ",id);
          this.state.chosenMedia.splice(0, 1, id); //splice-syntax: (index, how many elements to be deleted (here it removes its placeholder), element to be inserted)
          this.setState({selectedOptionPic: id});
        }
        return radio;
      }),
      sounds: this.state.sounds.map((radio) => {
        if (radio.id === id){
          radio.completed = !radio.completed
          console.log("sound: ",id);
          this.state.chosenMedia.splice(1, 1, id);
          this.setState({selectedOptionSound: id});
        }
        return radio;
      }),
      text: this.state.text.map((radio) => {
        if (radio.id === id){
          radio.completed = !radio.completed
          console.log("txt: ",id);
          this.state.chosenMedia.splice(2, 1, id);
          this.setState({selectedOptionText: id});
        }
        console.log(this.state.chosenMedia);
        return radio;
      })
    });
  };

  handleSave = () => {
    //const {chosenPicture, chosenSound, chosenText} = this.state;
    localStorage.setItem('chosenPicture', this.state.chosenMedia[0]);
    localStorage.setItem('chosenSound', this.state.chosenMedia[1]);
    localStorage.setItem('chosenText', this.state.chosenMedia[2]);
    console.log("Numbers transmitted to local storage");
  }

  handleFetch = () => {
    console.log("Fra local: ", localStorage.getItem('chosenPicture'), localStorage.getItem('chosenSound'), localStorage.getItem('chosenText'));
    this.setState({chosenPicture: Number(localStorage.getItem('chosenPicture'))});
    this.setState({chosenSound: Number(localStorage.getItem('chosenSound'))});
    this.setState({chosenText: Number(localStorage.getItem('chosenText'))});
    console.log("Fetched numbers: ", this.state.chosenPicture, this.state.chosenSound, this.state.chosenText);
  }

  //upon clicking "generate art"
  handleClick = () => {
    this.setState({chosenPicture: this.state.chosenMedia[0]});
    this.setState({chosenSound: this.state.chosenMedia[1]});
    this.setState({chosenText: this.state.chosenMedia[2]});
    console.log("handleClick clicked!");
    console.log("pic:" + this.state.chosenPicture,", sound:" + this.state.chosenSound,", text:" + this.state.chosenText);
  }

  handleClear = () => {
    //Reset state:
    this.setState({chosenMedia: [null, null, null], chosenText: this.null, chosenSound: this.null, chosenPicture: this.null});
    //TODO: Vi må oppdatere siden på et vis, og få fjernet avkrysningen  
  };

  whichTab = (tab) => {
    this.setState ({
      activeTab: tab
    })
  }

  handleChange(event) {
    this.setState({
      chosenPicture: event.target.value
    });
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
            <div className='text1'><h5>Create your own Gallery</h5><p>1. Choose one category for picture, sound and text </p>
            <p>2. Press "Generate art"</p><p>3. Click on the tabs to see your collection</p><p>4. Click "Save art" to save the collection</p></div> 
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
          <form className = "checkboxesStyle">
          <div className="pictures">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="1"
                checked={true}
                className="form-check-input"
              />
              Elephant
            </label>
          </div>

          <div className="pictures">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="2"
                className="form-check-input"
              />
              Giraffe
            </label>
          </div>

          <div className="pictures">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="3"
                className="form-check-input"
              />
              Dog
            </label>
          </div>

          <div className="form-group">
            <button className="btn btn-primary mt-2" type="submit">
              Save
            </button>
          </div>
      </form>

  );
}


          <Checkboxes checkboxes={this.state.pictures} checked={this.checked} className="pictures" onChange={this.handleOptionChange}/>
          <h2>SOUNDS</h2>
          <Checkboxes checkboxes={this.state.sounds} checked={this.checked} className="sounds" onChange={this.handleOptionChange}/>
          <h2>TEXT</h2>
          <Checkboxes checkboxes={this.state.text} checked={this.checked} className="text" onChange={this.handleOptionChange}/>
        </div>
      </div>    
      <div className='container2'>
        <div onClick={this.handleSave} className="buttonStyle">SAVE ART</div>
        <div onClick={this.handleFetch} className="buttonStyle">FETCH ART</div>
        <div onClick={this.handleClear} className="buttonStyle">CLEAR ART</div>
        <div onClick={this.handleClick} type="submit" className="buttonStyle">GENERATE ART</div>
      </div>     
    </div>
  );
}};

export default App;

//{this.componentDidMount()}