import React, { Component } from 'react';

const check =require('../img/check.png')

export default class Validation extends Component {

 	renderErrors(){
	  const types=this.props.type.split(' ');
	  const name=this.props.name;
	  const max= types.length -1;

		let error=0;

	  const validation=types.map((type, index)=>{
			if(!this.props.user.user[name].pristine){
			 	if (type==="req" && this.props.user.user[name].value===""){
					error+=1
			 		return <h3 key={name+"-error"} className="error"> Field is required</h3>
				}
				// 	if (type= "uniq":){
				// 	errors+="Is Unique"
				//}
				else if (type==="same" && this.props.user.user.pass.value!==this.props.user.user.pass2.value){
					error+=1
					return <h3 key={name+"-error"} className="error">Password does not match</h3>
				}

				else if (name === "pass2" && this.props.user.user.pass.value=== "" && this.props.user.user.pass2.value===""){
					error+=1
					return <h3 key={name+"-error"}  className="error">Empty password</h3>
				}

				else if(index === max && error===0){
					return <img key={name+"-checkmark"}  className="check" src={check} alt ="check" />
				}
	  	}
	  })

	  return validation

  }


 	render(){
    return (


      <span>	{this.renderErrors()}</span>

    )
  }
}
