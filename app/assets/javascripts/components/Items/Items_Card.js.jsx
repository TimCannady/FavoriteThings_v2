var ItemCard = React.createClass({
	render: function(){
		return(
			<div>
				<Link to="itemShow" params={{id: this.props.id}} >Link </Link>
				item name: {this.props.name}
				<br/>
				id: {this.props.id}
				<br/>
				<img src={this.props.photo_url} className="card-img" />
			</div>
		)
	}
})