var UserCard = React.createClass({
	render: function(){
		return(
			<div>
				<Link to="userShow" params={{id: this.props.id}} >
					user name: {this.props.f_name}
				</Link>
				<br/>
				id: {this.props.id}
				<br/>
				<img src={this.props.photo_url} className="card-img" />
			</div>
		)
	}
})