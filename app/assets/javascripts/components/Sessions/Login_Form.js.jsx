// var Router = ReactRouter;
// var Route = ReactRouter.Route;
// var Routes = ReactRouter.Routes;
// var Navigation = ReactRouter.Navigation;
// var History = ReactRouter.History;
// var Navigation = ReactRouter.Navigation;

var LoginForm = React.createClass({
	// mixins: [ History ],
	// mixins: [ Navigation ],

	getInitialState: function(){
		return{
			email: "",
			password: ""
		}
	},

	submit: function(e){
		// var self 
		e.preventDefault()
		// self = this

		var data = {
		   email: this.state.email,
		   password: this.state.password,
		}

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/sessions',
			data: data
			})
			.done(function(data) {
				App.logIn(data.email)
				alert('login successful!')
				history.pushState({},'','/')
				window.location.reload()
				// this.transitionTo('home')
				// this.history.pushState(null, '/home')
				// History.pushState(null, '/home')
				// self.clearForm()
			}.bind(this))
			.fail(function(data) {
				alert('No Such Email or Incorrect Password')
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
			<div className="login-signup-form-wrapper">
				Login:
				<br/>
				<form onSubmit={this.submit}  className="login-signup-form" >
				 	Email: <input label="Email:" onChange={this.handleEmailChange} />
				 	<br/>
				 	Password: <input label="Password:" type="password" onChange={this.handlePasswordChange} />
				 	<br/>
				 	<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})