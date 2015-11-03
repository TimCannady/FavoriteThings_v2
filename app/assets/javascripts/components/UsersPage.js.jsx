var UsersPage = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			users: []
		}
	},

	componentDidMount: function(){
		this.fetchData()
	},

	fetchData: function(data){
		$.ajax({
			type: "GET",
			url: "/users",
			data: "data",
			dataType: 'json',
			success: function(data){
				this.setState({didFetchData: 'true', users: data})
			}.bind(this),
			error: function(data){
				alert('error!')
			}
		})
	},

	// fetchData: function(){
	// 	data = App.request('GET', '/users')
	// 	alert(data)
	// 	this.setState({didFetchData: 'true', users: data})
	// },

	render: function(){
		var person = this.state.users.map(function(person){
			return <UserCard f_name={person.f_name} key={person.id} id={person.id}/>
		})

		return(
			<div>
				Fetched data: {this.state.didFetchData}
				<br/>
				{person}
			</div>
		)
	}
})