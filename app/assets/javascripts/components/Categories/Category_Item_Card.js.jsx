var CategoryItemCard = React.createClass({
	render: function(){
		return(
			<div>
				<Link to="itemShow" params={{id: this.props.id}} >
					item name: {this.props.name}
				</Link>
				<br/>
				item id: {this.props.id}
				<br/>
				item description: {this.props.description}
				<br/>
				<img src={this.props.photo_url} className="card-img" />
			</div>
		)
	}
})