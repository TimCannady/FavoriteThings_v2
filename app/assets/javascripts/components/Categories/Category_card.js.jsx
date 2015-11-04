var CategoryCard = React.createClass({
	render: function(){
		return(
			<div className="card-wrapper">
				<Link to="categoryShow" params={{id: this.props.id}} >
					category name: {this.props.name}
				</Link>
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