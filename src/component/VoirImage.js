import React, { Component } from 'react';


class VoirImage extends Component{
  ajoutImage(i){
    return < Ajout value={i}/>
  }
  suppImage(i){
    return < Supp value={i}/>
  }
  render(){
    return (
      <div className="VoirImage">
          <div>
        <h3>VOIR PHOTO</h3>
          </div>
        
      </div>
    );
  }
  
}

export default VoirImage;