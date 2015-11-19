var SignupForm = React.createClass({


	getInitialState: function(){
		return{
			email: "",
			password: "",
			fName: "",
			lName: "",
			city: "",
			gender: "",
			photo: ""
		}
	},

	submit: function(e){
		e.preventDefault()

		var file = document.getElementById('photo_upload').files[0]	
		var formData = new FormData();
		formData.append('email', this.state.email)
		formData.append('password', this.state.password)
		formData.append('f_name', this.state.fName)
		formData.append('l_name', this.state.lName)
		formData.append('city', this.state.city)
		formData.append('gender', this.state.gender)
		formData.append('photo', file, file.name)

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/users',
			data: formData,
			contentType: false,
			processData: false,
			})
			.done(function(data) {
				App.logIn(data.email)
				history.pushState({},'','/')
				window.location.reload()
				// this.transitionTo('home')
				// this.history.pushState(null, '/home')
				// History.pushState(null, '/home')
				// self.clearForm()
			}.bind(this))
			.fail(function(data) {
				alert('Failed to create new user')
			});
	},

	handleEmailChange: function(event) {
	    this.setState({email: event.target.value});
	},

	handlePasswordChange: function(event) {
	    this.setState({password: event.target.value});
	}, 
	handlefNameChange: function(event) {
	    this.setState({fName: event.target.value});
	},

	handlelNameChange: function(event) {
	    this.setState({lName: event.target.value});
	},  
	handleCityChange: function(event) {
	    this.setState({city: event.target.value});
	},

	handleGenderChange: function(event) {
	    this.setState({gender: event.target.value});
	},  
	handlePhotoChange: function(event) {
	    this.setState({photo: event.target.value});
	},

	render: function(){
		return(
			<div className="login-signup-form-wrapper">
				Sign Up:
				<br/>
				<form onSubmit={this.submit} className="login-signup-form" className="login-signup-form" >
				 	Email: <input label="Email:" onChange={this.handleEmailChange} />
				 	<br/>
				 	Password: <input label="Password:" type="password" onChange={this.handlePasswordChange} />
				 	<br/>
				 	First Name: <input label="fName:" type="text" onChange={this.handlefNameChange} />
				 	<br/>
				 	Last Name: <input label="lNname:" type="text" onChange={this.handlelNameChange} />
				 	<br/>
				 	City: <input label="City:" type="text" onChange={this.handleCityChange} />
				 	<br/>
				 	Gender: <input label="Gender:" type="text" onChange={this.handleGenderChange} />
				 	<br/>
				 	Headshot: <input label="photo:" type="file" onChange={this.handlePhotoChange} multiple={true} id={"photo_upload"}/>

				 	<br/>
				 	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})