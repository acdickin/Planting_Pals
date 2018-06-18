import {connect} from 'react-redux';
import Login from '../components/Login'

import {updateLogin, clearLogin} from '../actions'

const  mapStateToProps = state =>{
	return{
		login : state.login
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		updateLogin: (user)=>dispatch(updateLogin(user)),
		clearLogin: (user)=>dispatch(clearLogin(user))
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Login);
