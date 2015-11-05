var SignupForm = React.createClass({


	getInitialState: function(){
		return{
			email: "",
			password: "",
			fName: "",
			lName: "",
			city: "",
			gender: "",
			photoUrl: ""
		}
	},

	submit: function(e){
		// var self 
		e.preventDefault()
		// self = this

		var data = {
		   email: this.state.email,
		   password: this.state.password,
		   f_name: this.state.fName,
		   l_name: this.state.lName,
		   city: this.state.city,
		   gender: this.state.gender,
		   photo_url: this.state.photoUrl,
		}

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/users',
			data: data
			})
			.done(function(data) {
				App.logIn(data.email)
				alert('user creation successful!')
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
	handlePhotoUrlChange: function(event) {
	    this.setState({photoUrl: event.target.value});
	},

	render: function(){
		return(
			<div>
				Sign up!
				<br/>
				<form onSubmit={this.submit} >
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
				 	Headshot URL: <input label="photoUrl:" type="text" onChange={this.handlePhotoUrlChange} />
				 	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})