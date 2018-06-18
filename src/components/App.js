import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Menu from './Menu';
import Title from './Title';
import Welcome from'./Welcome';

import MyGarden from '../containers/mygarden';
import Login from '../containers/login';
import Plant from '../containers/plant';
import Plants from '../containers/plants';

class App extends Component {
  constructor() {
    super();
		this.state=({
			Loggedin:false
		})
	}
  render() {
    return (
      <div className="App">
        <Title/>
        <Route exact path ="/" component ={Welcome} />
        <Route path ="/welcome" component ={Welcome} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/plants" component={Plants}/>
        <Route path="/plants/:name" component={Plant}/>

        <Route expact path="/about" component={About}/>
        <Route exact path="/my_garden" component ={MyGarden}/>
        <Menu/>
      </div>
    );
  }
}

export default App;
// <Route path="/login" component={Login} />
