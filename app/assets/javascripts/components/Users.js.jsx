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
				// this.fetchUsersDone(data)
				// arr = data.map(function(person){
				// 	alert(person.f_name)
				// })
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})

	},

	// fetchUsersDone: function(data){
	// 	alert('done!')
	// 	alert(data)
	// },

	render: function(){
		person = this.state.users.map(function(person){
			return <User f_name={person.f_name} key={person.id} id={person.id}/>
		})

		return(
			<div>
				Users array: {person}
			</div>
		)
	}
})