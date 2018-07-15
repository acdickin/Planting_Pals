import React, { Component } from 'react';


export default class Plot extends Component {
  constructor(props){
    super(props);
    this.state=({
      neighbors:[],
      gridNum:0,
      row:0,
      col:0
    })
  }
  onClick=(e)=>{

    let {grid, row, col} =e.target.dataset
    console.log(grid, row , col)
    this.setState({gridNum:parseInt(grid),row:parseInt(row), col:parseInt(col)})
    this.getNeighbor();

  }
  getNeighbor=()=>{
    let neighbors =[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
    var n = neighbors.map((neighbor,i)=>{
      var arr =[neighbor[0]+this.state.col, neighbor[1]+this.state.row];
      if(arr[0]>=0 && arr[1]>=0){
        return arr;
      }
    })
    n=n.filter(Boolean);
    console.log(n)
    this.setState({neighbors:n})
  }
  // plotColor(){
  //   //Load neighbors
  //   console.log(this.props.grid);
  //   //Dedupe companions and adversaries
  //
  //   //check if companions are in adv and remove companions
  //
  //   // returns color plot should be
  //
  //  console.log("hello")
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
    var segment= row.map((value, i)=>{
      var cn= "plot "+value+" "+i;
      var gridNum=this.props.gridNum;
      return(
        <div key={cn} className={cn } onClick={this.onClick} data-grid={gridNum} data-row={rowNum} data-col={i}> {value} </div>
      )
    })
    return segment;
  }

  render(){
        console.log(this.state);
    return(
      <div className="plots">
        {this.renderPlot()}
      </div>
    )
  }
}
