import React, { Component } from 'react';
import Plot from "./Plot";

export default class MyGarden extends Component {

	createGrid(height, width, plants){
		let value = '';
		let grid = [...Array(height)].map(e => Array(width).fill(value));

		plants.forEach((plant)=>{
			grid[plant.row][plant.col]=plant.name;
		})
		return grid;
	}

	renderGarden(height,width,plants){
		let grid =this.createGrid(height, width, plants);
		return(
			<Plot grid={grid}></Plot>
		)
	}

	loadPlots(){
		const plots = this.props.user.plots;
		let garden=	plots.map((plot)=>{
			return(
			<div key={plot.name} className={plot.name}>
				<div className="plotTitle">{plot.name}</div>
				{this.renderGarden(plot.plotHeight, plot.plotWidth, plot.plants)}
			</div>
			)
		})
		return garden;
	}

	render(){

		// if(this.loaded===false){
		// 	<div id="myGarden" className="content">
		// 		<h2>Welcome to your garden {this.props.user.username.value} </h2>
		// 		<h3> Loading your Garden</h3>
		//
		// 	</div>
		// }
		// else{
			return(
				<div id="myGarden" className="content">
					<h2>Welcome to your garden {this.props.user.username} </h2>
					{this.loadPlots()}

				</div>
			)
		//}
	}
}
