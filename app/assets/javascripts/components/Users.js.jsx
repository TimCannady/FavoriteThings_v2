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
				this.setState({didFetchData: 'true', users: data})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})

	},

	// fetchUsers: function(){
	// 	data = App.request('GET', '/users')
	// 	alert(data)
	// 	this.setState({didFetchData: 'true', users: data})
	// },

	render: function(){
		person = this.state.users.map(function(person){
			return <User f_name={person.f_name} key={person.id} id={person.id}/>
		})

		return(
			<div>
				Fetched data: {this.state.didFetchData}
				<br/>
				Users array: {person}
			</div>
		)
	}
})