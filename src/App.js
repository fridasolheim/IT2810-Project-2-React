import React,{Component} from 'react';
import logo from './logo.svg';
import kiwi from './kiwi.svg';
import './App.css';
import Header from './Components/Header'
import Checkbox from './Components/Checkbox'
import Checkboxes from './Components/Checkboxes'



class App extends Component {

    state = {
      checkboxes: [
        {
          id: 1,
          title: 'Elephant',
          completed: false
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
        },
        {
          id: 4,
          title: 'Nature',
          completed: false
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
        },
        {
          id: 7,
          title: 'Lyrics',
          completed: false
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
      ]
    };
  

  // Toggle checked
  checked = (id) => {
    this.setState({
      checkboxes: this.state.checkboxes.map((checkbox) => {
        if (checkbox.id === id){
          checkbox.completed = !checkbox.completed
          console.log(id)
        }
        return checkbox;
      })
    });
  };
  
render(){  
  return(
    <div className="App">
      <Header />
        <div className="container1">
          <div className="Content">
            <div className='image1'><img src={kiwi} className="kiwi-bird" alt="kiwi" /></div>
            <div className='text1'><h5>Hællæ</h5></div>
          </div>
          <Checkboxes checkboxes={this.state.checkboxes} checked={this.checked}/>
        </div>     
    </div>
  );
}};

/*const checkboxesStyle = {
  display: flex,
  direction: column,
}*/


export default App;
