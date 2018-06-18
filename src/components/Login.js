import React, { Component } from 'react';

import Validation from '../containers/validation';

export default class Login extends Component {

	constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
		const {updateUser}=this.props;
    const newState=this.props.user.user
    newState[e.target.name] ={value: e.target.value, pristine:false}    
		updateUser(newState) 			
  }
  
  handleSubmit(e){
   	alert("A new user was Created for you"+ this.state.firstname);
 
   	e.preventDefault();
  }

  renderForm(formData){
  	const forms=this.formData.map((form,index)=>{
  		return(
  			<div key={form.title+"_"+form.name} id={form.name}>
  				<h2>{form.title}</h2>
  				<input key={index} name={form.name}  type={form.type} placeholder={form.placeholder} onChange={this.handleChange} autoComplete="off"  />  
  			  <Validation name={form.name} type={form.validation} user={this.state} />
  			</div>
  		)
  	})
  	return forms;
  }
  getvalue(value){
  	return this.state.value
	}

	render() {
		return (
			<div id="login" className="content">
				<form >
					<div className="formData">
					 	{this.renderForm(this.formData)}
					</div>

					<input id="submit" type="submit" value="submit"/>
				
				</form>
			</div>
		);
	}

	//method="post" action="/user/add"

 	formData=[	
 		{
			title:"First Name",
		  type:"text",
		  name:"firstname",
		  placeholder:"Add First Name",
			validation:"req",
			pristine:true
		},
		{
			title:"Last Name",
		  type:"text",
		  name:"lastname",
		  placeholder:"Add Last Name",
			validation:"req",
			pristine:true
		},
		{
			title:"E-mail",
			type:"text",
		  name:"email",
		  placeholder:"Add E-mail",
			validation:"req uniq",
			pristine:true
		},
		{
			title:"Password",
		  type:"password",
		  name:"pass",
		  placeholder:"Enter password",
			validation:"req",
			pristine:true
		},
		{
			title:"Password2",
			type:"password",
		  name:"pass2" ,
		  placeholder:"Re-enter password",
			validation:"same",
			pristine:true
		}
		
	]
}