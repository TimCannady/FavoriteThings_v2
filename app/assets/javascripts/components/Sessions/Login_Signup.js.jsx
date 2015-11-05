

var LoginSignup = React.createClass({
	render: function(){
		return(
			<div className="login-signup-wrapper" >
				<LoginForm />
				<br/>
				<SignupForm />
			</div>
		)
	}
})