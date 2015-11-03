var ItemCard = React.createClass({
	render: function(){
		return(
			<div>
				item name: {this.props.name}
				<br/>
				item id: {this.props.id}
				<br/>
				<img src={this.props.photo_url} className="card-img" />
			</div>
		)
	}
})