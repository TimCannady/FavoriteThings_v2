var UserShow = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			items: [],
			userID: localStorage.getItem('userID'), // the logged-in user's ID, not the ID of the profile being viewed
			headerImage: "../users.png"
		}
	},

	componentDidMount: function(){
		this.fetchAllItems()
	},

	fetchAllItems: function(){
		var data = {
		   userID: this.state.userID // ID of the logged-in user
		}
		var params = this.props.params.id // ID of the profile being viewed

		$.ajax({
			type: "GET",
			url: "/users/" + params,
			data: data,
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', items: data.items, headerImage: data.photo_url})
			}.bind(this),
			error: function(data){
				alert('error! couldnt fetch user data')
			}
		})
	},

	fetchCategoryItems: function(cID){
		var uID = this.props.params.id  // ID of the profile being viewed
		var cID = cID  // ID of the category to display the user's items from

		$.ajax({
			type: "GET",
			url: "/users/" + uID + "/categories/" + cID,
			data: 'data',
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', items: data})
			}.bind(this),
			error: function(data){
				alert("error! couldn't fetch user's items-by-category. Perhaps the user hasn't liked any from this category?")
			}
		})
	},

	removeItemFromDOM: function(){
		this.fetchAllItems() // fetch the new data now that the item is gone from the DB. This triggers a re-render
	},

	render: function(){
		var that = this
		var itemArray = this.state.items.map(function(item){
			return <ItemCard name={item.name} key={item.id} id={item.id} photo_url={item.photo_url} description={item.description} userID={localStorage.getItem('userID')} like_status={item.like_status} removeItemFromDOM={that.removeItemFromDOM} />
		})
		return(
			<div>
				<Header img_src={this.state.headerImage} fetchCategoryItems={that.fetchCategoryItems}  />
				
				<section className="body-wrapper">
					{itemArray}				
				</section>
			</div>
		)
	}
})