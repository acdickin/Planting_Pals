import React, { Component } from 'react';


export default class Plot extends Component {
  onClick(e){
    console.log(e.target.value);

    //plotColor()
  }
  // plotColor(row, col){
  //   //Load neighbors
  //
  //   //Dedupe companions and adversaries
  //
  //   //check if companions are in adv and remove companions
  //
  //   // returns color plot should be
  //
  // }

  renderPlot(){
    var grid=this.props.grid;
    var gridNum=this.props.gridNum;
    var row=grid.map((row,i)=>{
    var key ="row"+gridNum+i;
      return(
        <div key={key} className="row">
          {this.renderRow(row, i)}
        </div>
      )
    })
    return row;
  }
  renderRow(row, rowNum){
    console.log("row",row);
    var segment= row.map((value, i)=>{
      var cn= "plot "+value+" "+i;
      var gridNum=this.props.gridNum;
      var position=gridNum+","+rowNum+","+i;
      return(
        <div key={cn} className={cn} onClick={this.onClick} value={position}> {value} </div>
      )
    })
    return segment;
  }

  render(){
    console.log(this.props.gridNum);
    return(
      <div className="plots">
        {this.renderPlot()}
      </div>
    )
  }
}
