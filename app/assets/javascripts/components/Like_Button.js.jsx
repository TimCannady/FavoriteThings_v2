var LikeButton = React.createClass({

	getInitialState: function(){
		return{
			itemID: this.props.itemID,
			userID: this.props.userID
		}
	},

	addLike: function(){
		var data = {
		   itemID: this.state.itemID,
		   userID: this.state.userID
		}

		 // Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: '/items/' + this.state.itemID + '/like',
			data: data,
			success: function(data){
			}.bind(this),
			error: function(data){
				alert('failed to like item!')
			}
		});
	},

	handleLike: function(e){
		e.preventDefault()
		this.addLike()
	},

	render: function(){
		return(
			<p className="description">
				<a href="" onClick={this.handleLike} className="description"> Like </a>
			</p>
		)
	}
})