var ItemCard = React.createClass({

	getInitialState: function(){
		return{
			itemID: this.props.id,
			userID: this.props.userID,
			userHasLikedItem: false
		}
	},

	componentDidMount: function(){
		this.fetchLikeStatus()
		// newState = this.currentUserID()
		// this.setState({userID: newState})
		// this.checkUserLikeStatus()
	},

	// currentUserID: function(){
	// 	if(App.checkLoggedIn()){
	// 		var email = this.currentUserEmail()
	// 		this.fetchUserID(email)
	// 	}else{
	// 	}
	// },

	// currentUserEmail: function(){
	// 	return localStorage.getItem('email')
	// },

	// fetchUserID: function(email){
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "/users/email",
	// 		data: {email: email},
	// 		dataType: 'json',
	// 		success: function(data){
	// 			this.setState({didFetchData: 'true', userID: data.user_id})
	// 		}.bind(this),
	// 		error: function(data){
	// 			alert('error! couldnt fetch user id')
	// 		}
	// 	})
	// },

	fetchLikeStatus: function(){
		var data = {
		   itemID: this.state.itemID,
		   userID: this.state.userID
		}
		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'GET',
			url: '/items/' + this.state.itemID + '/like',
			data: data,
			success: function(data){  // need to refactor this because using 404 logic as an if/then is blowing up the console for things that haven't been liked
				// this.setState({userHasLikedItem: true})
				this.toggleLike()
			}.bind(this),
			error: function(data){
			}
		});
	},

	toggleLike: function(){
		this.setState({userHasLikedItem: !this.state.userHasLikedItem})
	},

	render: function(){
		var that = this
		// no matter the user or page, an item should simply show a + sign if they've never liked it, and a - sign if they have. Nothing else to it.
		var likeOrUnlikeButon
		if (this.state.userHasLikedItem == true) { 
			likeOrUnlikeButon = <UnlikeButton itemID={this.state.itemID} userID={this.state.userID} toggleLike={that.toggleLike} removeItemFromDOM={that.props.removeItemFromDOM}/>
		}else{
			likeOrUnlikeButon = <LikeButton itemID={this.state.itemID} toggleLike={that.toggleLike} userID={this.state.userID}/>
		} 
		return(
			<div className="card-wrapper">
				<Link to="itemShow" params={{id: this.props.id}} className="card-text" > 
					<div className="card-img-wrapper">
						<img src={this.props.photo_url} className="card-img" />
					</div>
					{this.props.name}
				</Link>	
				<br/>

				<div className="description">
					{likeOrUnlikeButon}

					{/*<a href="" onClick={this.handleLike}className="description"> Like </a>
					-
					<a href="" onClick={this.handleUnLike}className="description"> Unlike </a>*/}
				</div>
			</div>
		)
	}
})