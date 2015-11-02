var Users = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			users: []
		}
	},

	componentDidMount: function(){
		this.fetchUsers()
	},

	fetchUsers: function(data){
		$.ajax({
			type: "GET",
			url: "/users",
			data: "data",
			dataType: 'json',
			success: function(data){
				alert('success!')
				alert(data)
			},
			error: function(data){
				alert('error!')
			}
		})

	},

	render: function(){
		return(
			<div>
				Fetched data: {this.state.didFetchData}
				Users array: {this.state.users}
			</div>
		)
	}
})