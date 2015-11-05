var UserIndex = React.createClass({

	getInitialState: function(){
		return {
			didFetchData: false,
			headerImage: "users.png",
			users: []
		}
	},

	componentDidMount: function(){
		this.fetchData()
		App.checkLoggedIn()
		App.logIn()
		App.logOut()
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
		var personArray = this.state.users.map(function(person){
			return <UserCard f_name={person.f_name} key={person.id} id={person.id} photo_url={person.photo_url} />
		})

		return(
			<div>
				<Header img_src={this.state.headerImage}/>

				<section className="body-wrapper" >
					{personArray}
				</section>
			</div>
		)
	}
})