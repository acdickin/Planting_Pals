import {connect} from 'react-redux';
import Plants from '../components/Plants'

//import {fetchPlantsData } from '../actions'

const  mapStateToProps = state =>{
	return{
		plants: state.plants.plant
	  // hasError: state.plantsHaveError,
    // isLoading: state.plantsAreLoading
	}
}

// const mapDispatchToProps = dispatch =>{
// 	return{
// 		getPlants: (plants)=>dispatch(fetchPlantsData(plants))
// 	}
// }

export default connect (mapStateToProps)(Plants); //, mapDispatchToProps
