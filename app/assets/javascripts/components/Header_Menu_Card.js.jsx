var HeaderMenuCard = React.createClass({

	render: function(){

		return(
			<div className="header-menu-card-wrapper">
				<div className="header-menu-img-wrapper">
					<img src={this.props.photoUrl} className="header-menu-img"></img>
				</div>
				<br/>
				{this.props.name}
			</div>
		)
	}
})