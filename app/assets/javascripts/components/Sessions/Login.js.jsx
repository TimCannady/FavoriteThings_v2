var Login = React.createClass({

	getInitialState: function(){
		return{
			email: "",
			password: "nothing"
		}
	},

	submit: function(e){
		var self 
		e.preventDefault()
		self = this

		var data = {
		   email: this.state.email,
		   name: this.state.password,
		}

		// alert(this.state.email)
		// alert(this.state.password)

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/sessions',
			data: data
		})
			.done(function(data) {
			alert('success')
			self.clearForm()
		})
			.fail(function(jqXhr) {
			alert('failure')
		});
	},

	handleEmailChange: function(event) {
	    this.setState({email: event.target.value});
	},

	handlePasswordChange: function(event) {
	    this.setState({password: event.target.value});
	},    

	render: function(){
		return(
			<div>
				Login To Your Account
				<br/>
				<form onSubmit={this.submit} >
				 	Email: <input label="Email:" onChange={this.handleEmailChange} />
				 	<br/>
				 	Password: <input label="Password:" type="password" onChange={this.handlePasswordChange} />
				 	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})