var UserItemCard = React.createClass({
	getInitialState: function(){
		return{
			itemID: this.props.id,
			userID: this.props.userID,
			userHasLikedItem: true,
		}
	},

	componentDidMount: function(){
		// this.currentUserID()
		// newState = this.currentUserID()
		// this.setState({userID: newState})
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

	addLike: function(){
		var data = {
		   itemID: this.state.itemID,
		   userID: this.state.userID
		}
		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/items/' + this.state.userID + '/like',
			data: data,
			success: function(data){
			}.bind(this),
			error: function(data){
				alert('failed to like item!')
			}
		});
	},

	unLike: function(){ //unlikes the item from the DB. Does NOT remove the item from User_Show's userItems state array.
		var data = {
		   itemID: this.state.itemID,
		   userID: this.state.userID
		}

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/items/' + this.state.userID + '/unlike',
			data: data,
			success: function(data){
				this.props.removeItemFromDOM() // update the view if the user removes an item. Only does this from User_Item_Card because it's the only one that needs to appear to be live since you're on the page it removes it from.
			}.bind(this),
			error: function(data){
				alert('failed to unlike item!')
			}
		})
	},

	handleLike: function(e){
		e.preventDefault()
		this.addLike()
	},

	handleUnLike: function(e){
		e.preventDefault()
		this.unLike()
	},

	fetchLikeStatus: function(){
		var data = {
		   itemID: this.state.itemID,
		   userID: this.state.userID
		}
		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'GET',
			url: '/items/' + this.state.userID + '/like',
			data: data,
			success: function(data){
			}.bind(this),
			error: function(data){
				alert('couldnt locate that like')
				this.setState
			}
		});
	},

	render: function(){
		this.fetchLikeStatus()
		// no matter the user or page, an item should simply show a + sign if they've never liked it, and a - sign if they have. Nothing else to it.
		var likeOrUnlikeButon
		if (this.state.userHasLikedItem == true) { 
			likeOrUnlikeButon = <UnlikeButton />
		}else{
			likeOrUnlikeButon = <LikeButton />
		} 

		return(
			<div className="card-wrapper">
				<Link to="itemShow" params={{id: this.props.id}} className="card-text" >
					<div className="card-img-wrapper">
						 <img src={this.props.photo_url} className="card-img" />
					</div>
					{this.props.description}
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