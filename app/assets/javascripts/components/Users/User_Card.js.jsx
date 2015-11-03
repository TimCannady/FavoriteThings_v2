var UserCard = React.createClass({
	render: function(){
		return(
			<div>
				name: {this.props.f_name}
				<br/>
				id: {this.props.id}
				<br/>
				<img src={this.props.photo_url} className="card-img" />
			</div>
		)
	}
})