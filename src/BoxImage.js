import React, { Component } from 'react';
import Supprimer from './Supprimer';
import Ajouter from './Ajouter';
import Art from "..//..image/Art.jpg";
import Mode from "..//..image/Mode.jpg";
import Religion from "..//..image/Religion.jpg";
import Valse from "..//..image/Valse.jpg";


class BoxImage extends Component{
  render(){
    return (
      <div className="BoxImage">
          <div>
          <main className="Imag-main">
       <section>
<img src = {Art}/>
       </section>
       <section>
<img src = {Mode}/>
       </section>
       <section>
<img src = {Religion}/>
       </section>
       <section>
<img src = {Valse}/>
       </section>
       </main>
          </div>
          <button>
         Ajouter
         {this.props.value}
         </button>
          <button>
        Supprimer
        {this.props.value}
         </button>
       
      </div>
    );
  }
  
}

export default BoxImage;