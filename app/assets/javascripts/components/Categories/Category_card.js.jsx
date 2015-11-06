var CategoryCard = React.createClass({
	render: function(){
		return(
			<div className="card-wrapper">
				<Link to="categoryShow" params={{id: this.props.id}} className="card-text" >
					<div className="card-img-wrapper">
						<img src={this.props.photo_url} className="card-img" />
					</div>
					{this.props.name}
					<br/>
					<p className="description"> {this.props.description}</p>
				</Link>
			</div>
		)
	}
})