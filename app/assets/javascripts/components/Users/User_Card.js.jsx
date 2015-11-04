var UserCard = React.createClass({
	render: function(){
		return(
			<div className="card-wrapper">
				<Link to="userShow" params={{id: this.props.id}} className="card-text" >
					<div className="card-img-wrapper">
						<img src={this.props.photo_url} className="card-img" />
					</div>
					{this.props.f_name}
				</Link>
			</div>
		)
	}
})