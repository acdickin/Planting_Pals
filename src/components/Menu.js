import React,{Component} from 'react';


// import FaColumns from 'react-icons/lib/fa/columns'
// import FaTh from 'react-icons/lib/fa/th'
// import FaThLarge  from 'react-icons/lib/fa/th-large'




import { NavLink } from 'react-router-dom'

import MdViewModule from 'react-icons/lib/md/view-module'
// import TiLeaf from 'react-icons/lib/ti/leaf'
import FaPagelines from 'react-icons/lib/fa/pagelines';
import FaInfoCircle from  'react-icons/lib/fa/info-circle'

// const plantrG = require("../img/plantrG.svg");
// const plantrB = require("../img/plantrB.svg");

 // <NavLink exact to='/'><img src = {plantrG} alt ="plantr Logo"/>  </NavLink>
export default class Menu extends Component {

	render() {
		return (
		
      <div id="menubox">  
        <div id="menu">
          
          <div className="navbox">
          	<NavLink to ='/my_garden' activeClassName="active"><MdViewModule size= {40}/> 
          		<p>My Garden</p>
          	</NavLink>
          </div>

	        <div className="navbox">
	        	<NavLink to ='/plants' activeClassName="active"><FaPagelines size= {40}/> 
	        		<p>Plants</p>
	        	</NavLink>
	        </div>
	       
	        <div className="navbox">
	         	<NavLink to='/about' activeClassName="active"><FaInfoCircle size= {40}/>
	         		<p>About</p>
	         	</NavLink>
	        </div>
	        
        </div>
      </div>
 		);
	}
}



