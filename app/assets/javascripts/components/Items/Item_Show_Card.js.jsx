var ItemShowCard = React.createClass({
	render: function(){
		return(
			<div className="show-card-wrapper">
				<div className="show-card-text" > 
					<div className="show-card-img-wrapper">
						<img src={this.props.itemPhotoUrl} className="show-card-img" />
					</div>
					{this.props.itemName}
					{this.props.itemDescription}
				</div>	
				<br/>
				+
			</div>
		)
	}
})