import { connect } from 'react-redux';
import Plant from '../components/Plant'
//import {fetchPlantsData } from '../actions'

const  mapStateToProps = state =>{
	return{
		plants: state.plants.plant
	  // hasError: state.plantsHaveError,
    // isLoading: state.plantsAreLoading
	}
}
export default connect (mapStateToProps)(Plant); //, mapDispatchToProps
