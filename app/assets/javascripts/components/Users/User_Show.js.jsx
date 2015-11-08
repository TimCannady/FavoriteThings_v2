var UserShow = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			items: [],
			userID: localStorage.getItem('userID'),
			headerImage: "../users.png"
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(){
		var data = {
		   userID: this.state.userID
		}
		var params = this.props.params.id

		$.ajax({
			type: "GET",
			url: "/users/" + params,
			data: data,
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', items: data.items, headerImage: data.photo_url})
			}.bind(this),
			error: function(data){
				alert('error! couldnt load user data into user show')
			}
		})
	},

	removeItemFromDOM: function(){
		this.fetchData() // fetch the new data now that the item is gone from the DB. This triggers a re-render
	},

	render: function(){
		var that = this
		var itemArray = this.state.items.map(function(item){
			return <UserItemCard name={item.name} key={item.id} id={item.id} photo_url={item.photo_url} description={item.description} userID={localStorage.getItem('userID')} like_status={item.like_status}  removeItemFromDOM={that.removeItemFromDOM}/>
		})
		return(
			<div>
				<Header img_src={this.state.headerImage} />
				
				<section className="body-wrapper">
					{itemArray}				
				</section>
			</div>
		)
	}
})