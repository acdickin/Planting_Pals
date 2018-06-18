import axios from "axios";


// export const GET_PLANT_TYPE ='GET_PLANT_TYPE'
// export const GET_PLANT_BY_NAME ='GET_PLANT_BY_NAME'
export const PLANTS_HAS_ERRORED="PLANTS_HAS_ERRORED"
export const PLANTS_IS_LOADING="PLANTS_IS_LOADING"
export const PLANTS_FETCH_DATA_SUCCESS="PLANTS_FETCH_DATA_SUCCESS"



export const fetchPlantsData=()=>{
	
	return dispatch=>{
		dispatch(plantsIsLoading(false))
		
		axios.get("localhost:5000/plants").then((response)=>{
			if (response.status!==200){
				throw Error(response.statusText)
			}
			dispatch(plantsIsLoading(false))
			return response
		})
		.then((response)=>dispatch(plantsFetchDataSuccess(response.data)))
		.catch(()=>dispatch(plantsHasErrored(true)))
	}
}


// export const getPlantType=(type)=>{
// 	return{
// 		type: "GET_PLANT_TYPE",
// 		payload: plants
// 	}
// }
// export const getPlant=(name)=>{
// 	return{
// 		type: "GET_PLANT_BY_NAME",
// 		payload: plant
// 	}
// }


export function plantsHasErrored(bool) {
    return {
        type: 'PLANTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function plantsIsLoading(bool) {
    return {
        type: 'PLANTS_IS_LOADING',
        isLoading: bool
    };
}

export function plantsFetchDataSuccess(plants) {
    return {
        type: 'PLANTS_FETCH_DATA_SUCCESS',
        plants
    };
}