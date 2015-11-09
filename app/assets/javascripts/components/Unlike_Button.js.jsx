var UnlikeButton = React.createClass({

	getInitialState: function(){
		return{
			itemID: this.props.itemID,
			userID: this.props.userID
		}
	},

	unLike: function(){ //unlikes the item from the DB. Does NOT remove the item from User_Show's userItems state array.
		var data = {
		   itemID: this.state.itemID,
		   userID: this.state.userID
		}

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/items/' + this.state.itemID + '/unlike',
			data: data,
			success: function(data){
				if(this.props.removeItemFromDOM){ // only removeItemFromDOM() if the method has been passed down. In short, we only want/need to remove an item from the DOM if we're clicking the unlike button while on the logged-in user's show. 
					this.props.removeItemFromDOM() // update the view if the user removes an item. Only does this from User_Item_Card because it's the only one that needs to appear to be live since you're on the page it removes it from.
				} 
			}.bind(this),
			error: function(data){
				alert('failed to unlike item!')
			}
		})
	},

	handleUnLike: function(e){
		e.preventDefault()
		this.unLike()
		this.props.toggleLike()
	},

	render: function(){
		return(
			<p className="description">
				<a href="" onClick={this.handleUnLike} className="description"> Unlike </a>
			</p>
		)
	}
})