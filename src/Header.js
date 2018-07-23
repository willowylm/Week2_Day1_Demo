import React from 'react'
import logo from './logo.svg'
import PropTypes from 'prop-types'
import './App.css';

 class Header extends React.Component{
 
    constructor(){
        super()
    }

   
  render() {
      return (
        <header className="App-header">
        <img ref={(el)=>{
        this.img= el}}   src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.appName}</h1>
      </header>
      );
  } 
}



Header.propTypes = {
    appName: PropTypes.string.isRequired
};

export default Header;