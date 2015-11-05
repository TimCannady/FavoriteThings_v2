var CategoryItemCard = React.createClass({
	getInitialState: function(){
		return{
			itemID: this.props.id,
			userID: null,
			userHasLikedItem: null
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
				alert('error! couldnt fetch user id')
			}
		})
	},

	addLike: function(){
		var data = {
		   itemID: this.state.itemID,
		   userID: this.state.userID
		}
		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/items/' + this.state.userID + '/like',
			data: data
			})
			.done(function(data) {
				//cange he color of the like button to something else
				alert('like successful!')
			}.bind(this))
			.fail(function(data) {
				alert('failed to like item')
			});
	},
	
	unLike: function(){
		var data = {
		   itemID: this.state.itemID,
		   userID: this.state.userID
		}
		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/items/' + this.state.userID + '/unlike',
			data: data
			})
			.done(function(data) {
				//cange the color of the like button to something else
				alert('unlike successful!')
			}.bind(this))
			.fail(function(data) {
				alert('failed to unlike item')
			});
	},

	handleLike: function(e){
		e.preventDefault()
		this.addLike()
	},

	handleUnLike: function(e){
		e.preventDefault()
		this.unLike()
	},
	
	render: function(){
		return(
			<div className="card-wrapper">
				<Link to="itemShow" params={{id: this.props.id}} className="card-text" >
					<div className="card-img-wrapper">
						 <img src={this.props.photo_url} className="card-img" />
					</div>
					{this.props.description}
				</Link>

				<br/>

				<a href="" onClick={this.handleLike}> Like </a>
				<a href="" onClick={this.handleUnLike}> Unlike </a>

			</div>
		)
	}
})