import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
import { withRouter} from 'react-router-dom'

import MdSettings  from 'react-icons/lib/md/settings'
const plantrG = require("../img/plantrG.svg");
// const plantrB = require("../img/plantrB.svg");



 class Title extends Component {
 
  getTitle(){
    let path =this.props.location.pathname
    const re =/^(.*[/])/
    path =path.replace(re, "")
    path =path.replace(/_/g,' ')
    return path.toUpperCase()
  }
  render() {
    return (
      <div id="title">
				<NavLink exact to='/my_garden'><img src = {plantrG} alt ="plantr Logo"/>  </NavLink>
        <h1>{this.getTitle()}</h1>
        <MdSettings size={40}/>
      </div>
    );
  }
}
export default withRouter(Title)