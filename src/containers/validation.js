import {connect} from 'react-redux';
import Validation	 from '../components/Validation'
import {updateLogin} from '../actions'

const  mapStateToProps = state =>{
	return{
		login : state.login
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		updateLogin: (login)=>dispatch(updateLogin(login))
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Validation);
