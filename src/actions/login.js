// import axios from "axios";

export const GET_LOGIN ="GET_LOGIN"
export const UPDATE_LOGIN ="UPDATE_LOGIN"
export const SAVE_LOGIN ="SAVE_LOGIN"
export const CLEAR_LOGIN="CLEAR_LOGIN"


export const updateLogin = (user)=>{
	return{
		type: "UPDATE_LOGIN",
		payload: user
	}
}
export const clearLogin = (user)=>{
	return{
		type: "CLEAR_LOGIN",
		payload: user
	}
}

export const getLogin= (regLogin)=>{
	return{
		type: "GET_LOGIN",
		payload: regLogin
	}
}

export const saveLogin =(regLogin)=>{
	return{
		type: "SAVE_LOGIN",
		payload: regLogin
	}
}
