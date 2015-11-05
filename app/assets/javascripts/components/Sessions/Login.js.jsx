var Login = React.createClass({

	getInitialState: function(){
		return{
			name: "",
			email: "nothing"
		}
	},

	submit: function(e){
		var self
		e.preventDefault()
		self = this

		var data = {
		   name: this.state.name,
		   email: this.state.email,
		}

		alert(this.state.name)
		alert(this.state.email)

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/some/url',
			data: data
		})
			.done(function(data) {
			self.clearForm()
		})
			.fail(function(jqXhr) {
			console.log('failed to register');
		});
	},

	handleNameChange: function(event) {
	    this.setState({name: event.target.value});
	  },


	handleEmailChange: function(event) {
	    this.setState({email: event.target.value});
	  },  

	render: function(){
		return(
			<div>
				Login To Your Account
				<br/>
				<form onSubmit={this.submit} >
					Name: <input label="Name:" onChange={this.handleNameChange} />
					<br/>
				 	Email: <input label="Email:" onChange={this.handleEmailChange} />
				 	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})