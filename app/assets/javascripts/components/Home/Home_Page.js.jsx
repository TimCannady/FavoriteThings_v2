var HomePage = React.createClass({

	getInitialState: function(){
		return{
			didFetchData: false,
			userID: [],
		}
	},

	componentWillMount: function(){
		this.setState({userID: App.currentUserID()})
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