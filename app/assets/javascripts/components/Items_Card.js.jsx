var ItemCard = React.createClass({
	render: function(){
		return(
			<div>
				item name: {this.props.name}
				<br/>
				item id: {this.props.id}
			</div>
		)
	}
})