var CategoryCard = React.createClass({
	render: function(){
		return(
			<div>
				category name: {this.props.name}
				<br/>
				category id: {this.props.id}
				<br/>
				category description: {this.props.description}
			</div>
		)
	}
})