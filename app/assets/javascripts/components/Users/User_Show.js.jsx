var UserShow = React.createClass({
	getInitialState: function(){
		return {
			didFetchData: false,
			headerImage: "users.png",
			items: []
		}
	},
	
	render: function(){
		return(
			<div>
				<Header img_src={this.state.headerImage} />
				<br />
				user show
			</div>
		)
	}
})