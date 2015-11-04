var UserItemCard = React.createClass({
	render: function(){
		return(
			<div className="card-wrapper">
				<Link to="itemShow" params={{id: this.props.id}} className="card-text" >
					<div className="card-img-wrapper">
						 <img src={this.props.photo_url} className="card-img" />
					</div>
					{this.props.description}
				</Link>

				<br/>
				
				<Link to="itemShow" params={{id: this.props.id}} className="add-item-button" >
					+
				</Link>

			</div>
		)
	}
})