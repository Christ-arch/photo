import React, { Component } from 'react';
import Supprimer from './Supprimer';
import Ajouter from './Ajouter';
import Art from "..//..image/Art.jpg";
import Mode from "..//..image/Mode.jpg";
import Religion from "..//..image/Religion.jpg";
import Valse from "..//..image/Valse.jpg";


class BoxImage extends Component{
       deleteImage(){
              (this.props.image);
              addImage(){
                     (this.props.image)
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
          <button  onClick={this.addImage.bind(this)}>Ajouter</button>>
          <button  onClick={this.deleteImage.bind(this)}>Supprimer</button>>
       
      </div>
    );
  }
  
}

export default BoxImage;