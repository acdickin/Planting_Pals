import React, { Component } from 'react';


export default class Plant extends Component {

  renderList(data){
    var list= data.map((item)=>
      <li key={item}>{item}</li>
    )
    console.log(list);
    return list;
  }

  render(){
    let path =this.props.location.pathname.split("/")
    let len = path.length -1
    let page=path[len]
    const plants=this.props.plants
    const arr= plants.filter(plant=>plant.name===page)[0];
    console.log(arr.adversary);


    return(
      <div>
        <h3>{arr.name}</h3>
        <p>Type:{arr.type}</p>
        <p>Notes:{arr.notes}</p>
        <p>Adversaries:</p>
        <ul id="adv">
          {this.renderList(arr.adversary)}
        </ul>
        <p>Companions</p>
        <ul id="com">
          {this.renderList(arr.companion)}
        </ul>
      </div>
    )
  }
}
