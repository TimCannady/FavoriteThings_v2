var Nav = React.createClass({

	getInitialState: function(){
		return{
			modalOpen: false,
			userID: localStorage.getItem('userID')
		}
	},

	openModal: function() {
		this.setState({modalOpen: true});
	},

	closeModal: function() {
		this.setState({modalOpen: false});
	},

	handleLogOut: function(){
		App.logOut()
	},

	render: function(){
		var modalOpen = this.state.modalOpen

		return(
			<div className="nav">
				<button onClick={this.openModal} className="nav-button"> Add a Product </button>
					{modalOpen ? <NewItemForm userID={this.state.userID} closeModal={this.closeModal} /> : ''}
				<Link to="/" className="nav-button" >Home </Link>
				<Link to="/users" className="nav-button" >Users </Link>
				<Link to="/categories" className="nav-button" >Categories </Link>
				<Link to="/items" className="nav-button" >Items </Link>
				<Link to="/login" className="nav-button" onClick={this.handleLogOut} >Logout </Link>
			</div>
		)
	}
})