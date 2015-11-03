var ItemShow = React.createClass({
	getInitialState: function(){
		return {
			didFetchData: false,
			headerImage: "http://www.w3schools.com/html/html5.gif",
			items: []
		}
	},
	
	render: function(){
		return(
			<div>
				<Header img_src={this.state.headerImage} />
				<br />
				item show
			</div>
		)
	}
})