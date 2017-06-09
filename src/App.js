import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import shapeOne from './assets/shapeOne.svg';
import shapeTwo from './assets/shapeTwo.svg';
import shapeThree from './assets/shapeThree.svg';
import shapeFour from './assets/shapeFour.svg';
import shapeFive from './assets/shapeFive.svg';
import shapeSix from './assets/shapeSix.svg';
import line from './assets/line.svg';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className={'app__skills'}>
            <div className={'app__skills__shape app__skills__shape--one'} >
                <h3> Frontend  </h3>
                <img src={line}/>
            </div>
            <div className={'app__skills__shape app__skills__shape--two'} >
                <h3> Frontend  </h3>
                <img src={line}/>
            </div>
            <div className={'app__skills__shape app__skills__shape--three'} >
                <h3> Frontend  </h3>
                <img src={line}/>
            </div>
            <div className={'app__skills__shape app__skills__shape--four'} >
                <h3> Frontend  </h3>
                <img src={line}/>
            </div>
            <div className={'app__skills__shape app__skills__shape--five'} >
                <h3> Frontend  </h3>
                <img src={line}/>
            </div>
            <div className={'app__skills__shape app__skills__shape--six'} >
                <h3> Frontend  </h3>
                <img src={line}/>
            </div>
    
            <div className={'app__skills__shape app__skills__shape--circle--dull'}></div>     
            <div className={'app__skills__shape app__skills__shape--circle'}>
                <h1> Skill </h1>
            </div>  
            <div className={'app__skills__semi'} ></div>
        </div>  
      </div>
    );
  }
}

export default App;
