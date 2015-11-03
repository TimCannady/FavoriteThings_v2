var CategoryCard = React.createClass({
	render: function(){
		return(
			<div>
				category name: {this.props.name}
				<br/>
				category id: {this.props.id}
				<br/>
				category description: {this.props.description}
				<br/>
				<img src={this.props.photo_url} className="card-img" />
			</div>
		)
	}
})