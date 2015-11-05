var HomePage = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			userID: null,
		}
	},

	componentDidMount: function(){
		newState = this.currentUserID()
		this.setState({userID: newState})
	},

	currentUserID: function(){
		if(App.checkLoggedIn()){
			var email = this.currentUserEmail()
			this.fetchUserID(email)
		}else{
		}
	},

	currentUserEmail: function(){
		return localStorage.getItem('email')
	},

	fetchUserID: function(email){
		$.ajax({
			type: "GET",
			url: "/users/email",
			data: {email: email},
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', userID: data.user_id})
			}.bind(this),
			error: function(data){
				// alert('error! couldnt fetch user id')
			}
		})
	},

	render: function(){
		if(this.state.userID == null){
			return(
				<div>	
					<Header />
					Fetching user data. Have you <Link to="login">logged in...? </Link>
				</div>
			)
		}else{
			userID = this.state.userID
			return(
				<div>
					<UserShow params={{id: userID}} />
				</div>
			)
		}	
	}
})