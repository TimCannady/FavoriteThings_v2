var HomePage = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			userID: null,
		}
	},

	componentDidMount: function(){
		newState = this.currentUserID()
		// alert('new state: ' + newState)
		// this.setState({userID: 2})
		this.setState({userID: newState})
	},

	currentUserID: function(){
		// alert('checking user id')
		if(App.checkLoggedIn()){
			// alert('theres a logged in user')
			var email = this.currentUserEmail()
			this.fetchUserID(email)
		}else{
			// alert('theres not a logged in user')
			// alert(localStorage.getItem('email'))
		}
	},

	currentUserEmail: function(){
		return localStorage.getItem('email')
	},

	fetchUserID: function(email){
		// alert('fetching user id for ' + email)
		$.ajax({
			type: "GET",
			url: "/users/email",
			data: {email: email},
			dataType: 'json',
			success: function(data){
				// alert(data.user_id)
				this.setState({didFetchData: 'true', userID: data.user_id})
				// alert(this.state.userID)
			}.bind(this),
			error: function(data){
				alert('error! couldnt fetch user id')
			}
		})
	},

	render: function(){
		if(this.state.userID == null){
			return(
				<div>
					Loading....
				</div>
			)
		}else{
			userID = this.state.userID
			alert("not still loading. heres the id: " + userID)
			return(
				<div>
					<UserShow params={{id: userID}} />
				</div>
			)
		}	
	}
})