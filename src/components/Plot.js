import React, { Component } from 'react';


export default class Plot extends Component {
  renderPlot(){
    var grid=this.props.grid;
    var row=grid.map((row,i)=>{
      return(
        <div  className="row">
          {this.renderRow(row)}
        </div>
      )
    })
    return row;
  }
  renderRow(row){

    var segment= row.map((value, i)=>{
      var cn= "plot "+value;
      return(
        <div key={cn} className={cn}> {value} </div>
      )
    })
    return segment;
  }

  render(){

    return(
      <div class="plots">
        {this.renderPlot()}
      </div>
    )
  }
}
