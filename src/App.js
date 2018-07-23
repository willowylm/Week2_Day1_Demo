import React, { Component } from 'react';

import PropTypes from "prop-types"
import './App.css';
import Header from './Header'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      desc:"react demo",
      appName:"react appName",
      list: []
    };
    this.onClick=this.changeAppDesc.bind(this);
  }

   componentDidUpdate(){
    console.log(this.componentDidUpdate);
   }

   changeAppnameDesc=(()=>{
    this.setState({
      desc:"react redux"
    });
  })
  
  displayJson = () => {
    fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
      .then((response)=> {
        return response.json();
      })
      .then((myJson)=> {
        console.log(myJson);
         this.setState({list: myJson.items.slice(0, 10)})
      }).catch((error) => {
        // console.log(error)
      })
  }


  changeAppDesc(){
    this.setState({
      desc:"react demo 2018"
    });

  }
  render() {
    return (
      <div className="App">
       <Header appName= {this.state.appName} />
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          {this.state.desc}
        </p>
        <button className='btn1' onClick={this.displayJson}> displayjson</button>
        <button onClick={this.onClick}> change desc</button>
        {
          this.state.list.map(item => {
            return <li key={item.id}>{item.url},{item.description}</li>
                 
          })
        }
      </div>
  );
  }
}

App.propTypes = {
  hello: PropTypes.string.isRequired
};

export default App;
