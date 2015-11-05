var HomePage = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			userID: null,
		}
	},

	componentWillMount: function(){
		newState = App.currentUserID()
		// this.setState({userID: 2})
		this.setState({userID: newState})
	},

	render: function(){
		userID = this.state.userID
		return(
			<div>
				<UserShow params={{id: userID}} />
			</div>
		)
	}
})