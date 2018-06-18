import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Welcome extends Component {
	render(){
		return(
				<div id="welcome" className="content">
					<div id="welcomeText">
						<h2>Welcome to the Planting Pal App</h2>
						<h3>The Planting Pals App was created so that anyone looking to create a garden could  utilize the benifits of companion planting.If you are new companion planting it's pretty simple to do, but extremely benifitial.Certain plants naturally keep types of bugs away, add nutrients into the soil that other plants benifit from and more. Some plants are friends and some plants are not. Using this app you'll be able to determine which will work for you.</h3>
						<div id="signupBtn">
							<NavLink to="/login" > 
								Login/Signup 
							</NavLink>
						</div>
					</div>
				</div>

		)
	}
}