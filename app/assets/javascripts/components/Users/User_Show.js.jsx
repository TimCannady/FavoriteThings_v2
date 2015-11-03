var UserShow = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			userName: [],
			userItems: [],
			headerImage: "user.png"
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(){
		var params = this.props.params.id
		$.ajax({
			type: "GET",
			url: "/users/" + params,
			data: "data",
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', userName: data.user_name, userItems: data.items})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})
	},

	render: function(){
		var userItem = this.state.userItems.map(function(item){
			return <UserItemCard name={item.name} key={item.id} id={item.id} description={item.description} photo_url={item.photo_url} />
		})
		return(
			<div>
				<Header img_src={this.state.headerImage} />
				<br />
				User Name: {this.state.userName}
				{userItem}				
			</div>
		)
	}
})