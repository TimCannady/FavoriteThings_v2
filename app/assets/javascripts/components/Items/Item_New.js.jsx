var ItemNew = React.createClass({

	getInitialState: function(){
		return {
			userID: localStorage.getItem('userID'),
			headerImage: "http://www.w3schools.com/html/html5.gif",

		}
	},

	render: function(){
		return(
			<div>
				<Header img_src={this.state.headerImage} />
				<section className="body-wrapper">
					<NewItemForm userID={this.state.userID} />
				</section>
			</div>
		)
	}
})