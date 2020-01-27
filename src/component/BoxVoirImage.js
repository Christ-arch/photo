import React, { Component } from 'react';


class App extends Component{
    renderImage(i){
        return <BoxImage value ={i}/>;
    }
  render(){
    return (
      <div className="BoxVoir">
          <div>
          <aside className="Voir-aside">
       <h3> Voir Photo</h3>
        </aside>

          </div>
       
      </div>
    );
  }
  
}

export default BoxVoirImage;