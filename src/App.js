import React, { Component } from 'react';
import CopyRight from './CopyRight';
import VoirImage from './VoirImage';

class App extends Component{
  render(){
    return (
      <div className="App">
       <BoxPhototheque/>  
       <BoxImage/>  
       <VoirImage/>  
      </div>
    );
  }
  
}

export default App;
