import React,{Component} from 'react';

import kiwi from './kiwi.svg';
import './App.css';
import Header from './Components/Header';

import Checkboxes from './Components/Checkboxes';
import Tabs from './Components/Tabs';
import Jazz3 from './Jazz3.mp3'




class App extends Component {
   
  

  state = {
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


  /*  $("input:checkbox").click(function(){
      if ($("input:checkbox:checked").length > 3){
        return false;
     }
  });*/
    

  // Toggle checked
  checked = (id) => {
    this.setState({
      animals: this.state.animals.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log(id)
        }
        return checkbox;
      }),
      sounds: this.state.sounds.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log(id)
        }
        return checkbox;
      }),
      text: this.state.text.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log(id)
        }
        return checkbox;
      })
    });
  };


/*onClick = (path) => {
  fetch(path)
.then(response => response.text())
.then(data =>{
this.setState({
chosenPic : data
}
);
}}*/
 
  
render(){  

  return(
    
    <div className="App">
      
      <Header />
      <div className="container1">
      <Tabs>
        
      <div label="Welcome">
      <div className="Content">
            <div className='image1'><img src={kiwi} className="kiwi-bird" alt="kiwi" /></div>
            <div className='text1'><h5>Hællæ</h5></div>
            
          </div>
      </div>
      <div label="Page 1">
      <audio ref="audio_tag" src={Jazz3} controls autoPlay/>
        
      </div>
      <div label="Page 2">
        See ya later, <em>Alligator</em>!
      </div>
      <div label="Page 3">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Page 4">
        Heihei
      </div>
    </Tabs>
        
          
          <div className= "checkboxesStyle">
          <h1>Picture</h1>
          <Checkboxes checkboxes={this.state.animals} checked={this.checked}/>
          <h1>Sounds</h1>
          <Checkboxes checkboxes={this.state.sounds} checked={this.checked}/>
          <h1>Text</h1>
          <Checkboxes checkboxes={this.state.text} checked={this.checked}/>
          </div>
          
        </div> 
        <button className="generate">Hei</button>    
    </div>
  );
}};

/*const checkboxesStyle = {
  display: flex,
  direction: column,
}*/


export default App;
