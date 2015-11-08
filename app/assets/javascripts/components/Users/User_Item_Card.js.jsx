var UserItemCard = React.createClass({
	getInitialState: function(){
		return{
			itemID: this.props.id,
			userID: this.props.userID,
			userHasLikedItem: this.props.like_status
		}
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
			likeOrUnlikeButon = <LikeButton itemID={this.state.itemID} userID={this.state.userID}/>
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

				</div>
			</div>
		)
	}
})